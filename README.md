# MARKIFAST — Sitio web y blog

Proyecto de web corporativa y blog para MARKIFAST, una agencia de marketing digital con sede prevista en Vitoria-Gasteiz. La empresa se dirige a autónomos y pymes: analiza tendencias con apoyo de IA, prepara ideas y guiones personalizados, coordina la producción audiovisual con profesionales freelance y revisa los resultados con supervisión humana.

La web presenta los servicios, el método de trabajo, el equipo promotor, el modelo empresarial previsto y los compromisos con la innovación responsable, los ODS y la presencia del euskera en redes sociales. El blog reúne guías prácticas relacionadas con la estrategia y la creación de contenido.

## Estructura del proyecto

```text
.
├── index.html                 # Entrada que redirige a la web corporativa
├── web/
│   ├── index.html              # Página principal de MARKIFAST
│   ├── README.md               # Esta documentación
│   ├── css/
│   │   └── styles.css          # Diseño responsive de la web
│   └── js/
│       └── main.js             # Menú, formulario mailto y animaciones
└── blog/
    ├── index.html              # Listado de los artículos
    ├── css/
    │   ├── styles.css          # Estilos compartidos del blog
    │   └── articles.css        # Estilos de lectura de cada artículo
    ├── js/
    │   └── main.js             # Menú móvil, año y efectos de entrada
    └── posts/                  # Artículos HTML individuales
```

### Artículos del blog (15 publicaciones)

- `adaptar-tendencias-marca.html`: adaptar formatos populares sin copiar.
- `brief-produccion-freelance.html`: preparar instrucciones para una producción externa.
- `calendario-editorial-realista.html`: planificar publicaciones con un ritmo sostenible.
- `campana-lanzamiento-redes.html`: organizar el contenido para presentar una novedad.
- `contenido-euskera-marca.html`: comunicar en euskera con una voz natural.
- `contenido-local-comunidad.html`: conectar el contenido con la comunidad local.
- `elegir-redes-sociales-negocio.html`: seleccionar canales según audiencia y recursos.
- `guia-contenido-redes.html`: definir objetivos, audiencia, temas y medición.
- `guion-video-corto.html`: estructurar guiones claros para vídeos breves.
- `ia-creacion-contenido.html`: utilizar IA como apoyo con revisión humana.
- `jornada-grabacion-videos.html`: coordinar una sesión de grabación.
- `metricas-contenido-redes.html`: interpretar indicadores según objetivos.
- `perfil-redes-sociales-empresa.html`: presentar el negocio de forma clara en su perfil.
- `testimonios-clientes-redes.html`: compartir experiencias con consentimiento y contexto.
- `voz-marca-redes-sociales.html`: establecer pautas de comunicación reconocibles.

## Comentarios en el código

Los comentarios HTML explican la estructura de las páginas y el propósito de los artículos. Los comentarios CSS agrupan reglas por componente o comportamiento visual. Los comentarios JavaScript describen las interacciones del menú, el formulario y las animaciones. Se mantienen en el código fuente y no aparecen como texto en la página publicada.

## Ejecutar en local

Abre el `index.html` de la raíz o inicia **Live Server** desde la carpeta del proyecto. También puedes abrir `web/index.html` directamente. No requiere instalación de dependencias ni un proceso de compilación.

## Validación

- HTML y CSS: pueden revisarse con el **Nu Html Checker** (el comprobador utilizado por el servicio `validator.w3.org/nu`). El proyecto se comprobó localmente con este validador.
- JavaScript: no dispone de una validación W3C equivalente; conviene revisar los diagnósticos del editor y probar las interacciones en el navegador.
- Antes de publicar cambios, comprueba los enlaces internos, las anclas de los artículos y la visualización en escritorio y móvil.

## Antes de publicar

1. Sustituye `hola@tudominio.com` en `web/js/main.js` por el correo real de MARKIFAST.
2. Añade los enlaces reales de redes sociales y los datos de contacto.
3. La gestión de publicaciones depende de la autorización del cliente; sin ella, MARKIFAST recomienda horarios y analiza resultados, pero el cliente publica.
4. El formulario utiliza `mailto:`: prepara un borrador en la aplicación de correo, no almacena ni envía datos a un servidor. Para recibir consultas de forma fiable, conecta un backend o un proveedor de formularios y añade las medidas de privacidad necesarias.
5. Revisa los textos legales, la política de privacidad, las cookies y el consentimiento según las tecnologías y los datos que realmente se utilicen.
6. La IA se presenta como apoyo para analizar tendencias; no garantiza viralidad ni sustituye la revisión humana. Sustituye las métricas ilustrativas por resultados reales antes de publicar casos de éxito.
7. El ODS 18 se identifica como una propuesta promovida en Euskadi, no como uno de los 17 ODS oficiales de la ONU.

## Alcance técnico

Sitio estático frontend hecho con HTML, CSS y JavaScript. No incorpora autenticación, base de datos, analítica ni backend.
