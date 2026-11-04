# MARKIFAST — Sitio web y blog

Sitio web y blog para MARKIFAST, un proyecto de agencia de marketing digital con sede prevista en Vitoria-Gasteiz. Analiza tendencias y formatos en redes sociales con apoyo de IA, crea ideas y guiones personalizados, coordina la producción audiovisual con profesionales freelance y mejora las estrategias a partir de métricas, siempre con supervisión humana.

La página principal resume también el equipo promotor, el modelo de trabajo, la forma jurídica propuesta y los compromisos de MARKIFAST con los ODS, el uso responsable de la IA y la presencia del euskera en redes sociales.

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
        └── guia-contenido-redes.html
```

## Ejecutar

Abre el `index.html` de la raíz para entrar en la web corporativa. La navegación enlaza la página principal, el blog y el primer artículo. Los siguientes artículos se incorporarán de forma individual. Para desarrollo, puedes usar la extensión **Live Server** de Visual Studio Code.

## Antes de publicar

1. Sustituye `hola@tudominio.com` en `js/main.js` por el correo real de MARKIFAST.
2. Añade los enlaces reales de redes sociales y los datos de contacto.
3. La publicación de contenido en redes se presenta como un servicio sujeto a autorización del cliente; la recomendación de horarios y el análisis de resultados forman parte del proceso.
4. El formulario usa `mailto:`: no almacena ni envía automáticamente la información. Para recibir consultas de forma fiable, conecta un backend o un proveedor de formularios y añade las medidas de privacidad necesarias.
5. Revisa textos legales, política de privacidad, cookies y consentimiento según las tecnologías y datos que realmente utilicéis.
6. La IA se presenta como apoyo para analizar tendencias; no garantiza viralidad ni sustituye la revisión humana. Sustituye las métricas ilustrativas por resultados reales antes de publicar casos de éxito.
7. El proyecto contempla la creación de contenido en euskera para contribuir a la diversidad lingüística en redes sociales. La web aclara que el ODS 18 es una propuesta promovida en Euskadi y no un ODS oficial de la ONU.

## Alcance

Página estática frontend con HTML semántico, CSS responsive y JavaScript para navegación móvil y preparación del email. No incorpora autenticación, base de datos, analítica ni backend.
