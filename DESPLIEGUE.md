# Despliegue e infraestructura

Cómo está montado **https://ja54312.com** y qué hay que saber para no romperlo.

Última revisión: **15 de septiembre de 2026**.

---

## Resumen

| Pieza | Valor |
|---|---|
| Hosting | AWS Amplify Hosting, región `us-east-2` |
| Plataforma de la app | `WEB_COMPUTE` (SSR) |
| Build | `next build` → `.next` |
| Distribución CloudFront | `dhrk0huo90m1s.cloudfront.net` |
| DNS | Cloudflare (`anirban.ns.cloudflare.com`, `sarah.ns.cloudflare.com`) |
| Registrador | Namecheap (solo el dominio; los NS apuntan a Cloudflare) |
| Certificado | `*.ja54312.com`, emitido por Amazon (ACM) |
| Rama desplegada | `master` |

El *app ID* y el ARN están en la consola de Amplify, en **App settings → General settings**.

---

## Flujo de despliegue

`master` → Amplify detecta el push → ejecuta `amplify.yml`:

```
preBuild:  npm ci
build:     npm run typecheck   (next typegen && tsc --noEmit)
           npm run lint        (eslint .)
           npm run build       (next build)
artifacts: baseDirectory .next
```

Un fallo de tipos o de lint **detiene el despliegue** antes de publicar.

El trabajo se hace en `DEVELOPMENT` y se lleva a `master` por pull request.

---

## DNS en Cloudflare

Tres registros, **los tres en gris (DNS only)**:

| Tipo | Nombre | Contenido | Proxy |
|---|---|---|---|
| `CNAME` | `_aa0af25a28c02b13d6dd825816e6dccc` | `_bd49f462aeeac487c07b71c7191cf669.wzccmgtwzk.acm-validations.aws` | DNS only |
| `CNAME` | `@` | `dhrk0huo90m1s.cloudfront.net` | DNS only |
| `CNAME` | `www` | `dhrk0huo90m1s.cloudfront.net` | DNS only |

Notas:

- **`@` va como `CNAME`.** Amplify indica `ANAME`, pero Cloudflare no tiene ese
  tipo: su *CNAME flattening* resuelve el ápice igual. (Con el DNS en Namecheap
  habría hecho falta un `ALIAS`.)
- **En el campo *Name* solo va la etiqueta izquierda.** Cloudflare añade el
  dominio automáticamente; si se pega el nombre completo queda duplicado.
- **Sin punto final** en los valores.

### Por qué en gris y no en naranja

Proxear (naranja) los registros rompe cosas:

- El de **validación ACM** no se puede proxear siquiera: Cloudflare lo rechaza
  con *«Target … is not allowed for a proxied record»*, porque devolvería sus
  propias IPs y Amazon no podría leer la validación.
- `@` y `www` proxeados hacen que Amplify vea IPs de Cloudflare en lugar de su
  CloudFront, y **la verificación del dominio se queda colgada**.

Si algún día se quiere activar el proxy en `@` y `www` (WAF, analytics, caché),
hay que poner antes **SSL/TLS → Full (strict)**, o habrá bucle de
redirecciones: Amplify fuerza HTTPS y Cloudflare le hablaría en HTTP. El
registro de ACM se queda en gris siempre.

Para este sitio no compensa: proxear pone CloudFront detrás de Cloudflare, dos
CDN encadenadas, y las IPs de cliente en los logs de Amplify pasan a ser las de
Cloudflare. El proxy tiene sentido en subdominios de túneles, no aquí.

---

## ⚠️ Pendiente: el registro de validación de ACM

**El CNAME `_aa0af25a28c02b13d6dd825816e6dccc` no está publicado.**
Comprobado el 15/09/2026: `NXDOMAIN` desde los dos nameservers autoritativos.

El certificado se emitió igualmente (el registro existió el tiempo suficiente
para que Amazon lo validara y luego desapareció), así que **hoy el sitio
funciona**. El problema es a futuro:

> ACM necesita ese CNAME presente de forma permanente para **renovar
> automáticamente**. La renovación arranca unos 60 días antes de expirar, es
> decir hacia **enero de 2027**. Si no está, falla en silencio y el certificado
> caduca el **1 de abril de 2027**.

**Qué hacer:** en Amplify, *Custom domains* → `ja54312.com`, comprobar si sigue
mostrando el registro de verificación. Si lo muestra, recrearlo en Cloudflare en
gris y dejarlo ahí. Si ya no lo pide, Amplify gestiona la renovación y no hay
nada que hacer.

Verificación rápida:

```bash
dig +short _aa0af25a28c02b13d6dd825816e6dccc.ja54312.com CNAME
# esperado: _bd49f462aeeac487c07b71c7191cf669.wzccmgtwzk.acm-validations.aws.
```

---

## Errores ya vistos y su causa

### `Can't find required-server-files.json in build output directory`

El build pasa y el **deploy** falla. Amplify registró la app como `WEB_COMPUTE`
al detectar Next.js y espera el artefacto de servidor, pero el build generaba
una exportación estática en `out/`.

La plataforma **no se controla desde `amplify.yml`**; `baseDirectory` solo dice
de qué carpeta coger los artefactos. Y **recrear la app no lo arregla**: la
detección vuelve a asignar `WEB_COMPUTE`.

Salidas: dejar el proyecto en modo SSR (lo actual), o cambiar la plataforma:

```bash
aws amplify update-app --app-id <app-id> --platform WEB --region us-east-2
```

Para servirlo como estático hacen falta **tres** cambios, no dos:
`output: 'export'` + `images.unoptimized` en `next.config.ts`,
`baseDirectory: out` en `amplify.yml`, **y** la plataforma en `WEB`.

### `error TS2307: Cannot find module '@/assets/*.png'`

`next-env.d.ts` está en `.gitignore` por convención de Next y solo lo genera el
build, así que en un clon limpio no existe y `tsc` no resuelve los imports
estáticos de imágenes. En local pasa desapercibido porque el archivo sobrevive
de builds anteriores, y `npm ci` tampoco lo borra.

Por eso `typecheck` es `next typegen && tsc --noEmit`, y no un `tsc` a secas.

> Para reproducir el entorno de Amplify: clonar el repo en otro directorio y
> ejecutar el pipeline ahí. `npm ci` a solas **no** es suficiente.

---

## Comprobaciones útiles

```bash
# DNS sin caché, contra los NS autoritativos
dig @anirban.ns.cloudflare.com +short ja54312.com A
dig @anirban.ns.cloudflare.com +short www.ja54312.com CNAME

# IPs 104.21.x / 172.67.x  -> proxeado (mal)
# IPs 18.x / CloudFront    -> DNS only (bien)

# Certificado: emisor y vigencia
echo | openssl s_client -connect www.ja54312.com:443 -servername www.ja54312.com 2>/dev/null \
  | openssl x509 -noout -subject -issuer -dates

# Que responda y que sea la build nueva
curl -sI https://ja54312.com | grep -iE '^HTTP|x-nextjs'
```

`x-nextjs-prerender: 1` y `cache-control: s-maxage=86400` confirman que la
página se sirve pregenerada y con la revalidación diaria activa.

---

## Histórico

- **v3** (hasta 2024): Parcel 1 + React 17, publicado en GitHub Pages desde la
  rama `gh-pages`, con una copia en Netlify apuntada por el dominio.
- **v4** (15/09/2026): Next.js 16 + React 19 + TypeScript, en Amplify con
  dominio propio.

Al migrar se retiraron: la rama `gh-pages`, las ramas huérfanas `HEADER`,
`FOOTER`, `MAIN` y `main`, y las carpetas `prod/` y `final/` (~30 MB de builds
de Parcel versionados).

El sitio de **Netlify** que servía el dominio antes quedó desconectado al
cambiar el DNS. Conviene borrarlo desde su panel: seguirá desplegado en su URL
`*.netlify.app` aunque ya no tenga el dominio.
