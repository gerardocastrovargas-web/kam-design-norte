KAM Design 2.3: se redujo el logotipo en header y footer y se eliminó el texto «DEMO VISUAL» del pie de página. El resto de la web se mantiene igual.

KAM Design 2.2
================

Cambios en esta versión:
- Sustitución de las 6 imágenes de proyectos por las nuevas imágenes proporcionadas por el usuario, con tratamiento de iluminación cálida acorde a la web.
- Integración del nuevo logo KAM Design adaptado a la identidad visual del sitio en header y footer.
- Se conserva el resto del diseño aprobado anteriormente.

# KAM DESIGN — Demo visual 2.1 · Imágenes HD

**Estado:** prototipo de diseño para revisar con Alex. No reemplaza el portal actual ni representa un sitio oficial listo para producción.

## Abrir la demo

- Abre `index.html` con Chrome o Edge, o inicia un servidor estático local.
- En Windows con Python instalado: `python -m http.server 8080` desde esta carpeta y abre `http://localhost:8080`.
- Es una web estática: puede desplegarse directamente en Vercel sin proceso de compilación, con la carpeta raíz como origen.

## Tecnologías

- HTML5 semántico, CSS moderno (Grid, Flexbox, `clamp`, media queries), JavaScript sin dependencias.
- Animaciones de entrada por `IntersectionObserver`, parallax suave optimizado con `requestAnimationFrame`, soporte `prefers-reduced-motion` y navegación accesible.
- Estructura preparada para evolución con GSAP/ScrollTrigger y/o React/TypeScript, como en Playa Paraíso, cuando se aprueben las animaciones narrativas.

## Qué está implementado

- Hero fotográfico con espacio listo para futuro video.
- Sección El Estudio, portafolio de seis fichas, cinco servicios, KAM Digital, proceso, Contacto de altura ampliada, footer y navegación móvil.
- Interfaz responsiva para escritorio, tablet y móvil.

## Muy importante: imágenes e información

- Las imágenes de `assets/` son **nuevas escenas de arquitectura generadas con IA en alta calidad para esta demo**, optimizadas en WebP con variantes responsivas (archivo original y `-sm.webp`). **No son proyectos ni renders realizados por Alex ni por KAM Design**: sustituir por materiales reales que él apruebe antes del lanzamiento. Los nombres y categorías de los proyectos son **ilustrativos**, no constituyen un portafolio verificado.
- El correo de contacto (`info@kamdesignmx.com`) procede de la versión previa del proyecto y debe confirmarse con Alex antes del lanzamiento.
- No hay base de datos, CRM, cotizador, formulario ni analytics; los enlaces internos sirven para probar la navegación. Es intencional: estas funciones corresponden a la segunda etapa.

## Cómo agregar el video al hero

En `index.html`, sustituir el `<img class="hero-photo" ...>` dentro de `.hero-media` por un `video` con `autoplay muted playsinline loop preload="metadata" poster="./assets/hero.webp"`. Conservar las clases existentes (o añadir estilos equivalentes) y proporcionar archivo MP4 H.264 con versión WebM para compatibilidad. Optimizar el peso y disponer de imagen fallback.

## Próxima fase

1. Confirmar los renders auténticos y textos con Alex (los visuales generados son exclusivamente conceptuales).
2. Revisar la experiencia móvil y afinar las composiciones finales.
3. Añadir GSAP/ScrollTrigger (scrollytelling basado en escenas) y el video panorámico.
4. Implementar funcionalidades reales y preparar despliegue definitivo con GitHub/Vercel.

## Cambios de la versión 2.1

- Se reemplazaron 10 recortes del mockup por 10 escenas originales generadas en alta calidad, en WebP de calidad alta (90) y variantes menores para dispositivos móviles (88).
- Se elevó el peso de Manrope para el menú principal y el botón **Hablemos**, además de aumentar ligeramente el grosor en titulares y textos secundarios.
- Se conservaron la composición general, secciones, paleta y el alto ampliado de Contacto.
- La versión anterior permanece intacta: carpeta separada para esta actualización.
