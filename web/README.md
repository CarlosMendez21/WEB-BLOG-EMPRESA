# Nexo Social — Sitio web y blog

Landing page adaptable para una agencia de marketing digital que desarrolla estrategias de contenido para autónomos y pymes con apoyo de IA y supervisión humana.

## Estructura

```text
.
├── index.html
├── web/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── blog/
    ├── index.html
    ├── css/
    │   ├── styles.css
    │   └── articles.css
    ├── js/
    │   └── main.js
    └── posts/
```

## Ejecutar

Abre el `index.html` de la raíz para entrar en la web corporativa. La navegación enlaza la página principal, el blog y los cinco artículos. Para desarrollo, puedes usar la extensión **Live Server** de Visual Studio Code.

## Antes de publicar

1. Cambia **Nexo Social** por el nombre definitivo de la empresa.
2. Sustituye `hola@tudominio.com` en `js/main.js` por el email real.
3. Añade los enlaces reales de redes sociales y los datos de contacto.
4. El formulario usa `mailto:`: no almacena ni envía automáticamente la información. Para recibir consultas de forma fiable, conecta un backend o un proveedor de formularios y añade las medidas de privacidad necesarias.
5. Revisa textos legales, política de privacidad, cookies y consentimiento según las tecnologías y datos que realmente utilicéis.
6. Sustituye las métricas y elementos ilustrativos por información real si incorporas resultados o casos de éxito.

## Alcance

Página estática frontend con HTML semántico, CSS responsive y JavaScript para navegación móvil y preparación del email. No incorpora autenticación, base de datos, analítica ni backend.
