# SDC Joyería Exclusiva · Demo independiente

Propuesta de tienda en español argentino, inspirada en la estructura editorial de la captura de Missoma y las demos anteriores. Paleta marfil, arena y oro antiguo con uso mínimo de tonos oscuros. Hero dividido en escritorio y carrusel con flechas, indicadores, deslizamiento y teclado en móvil.

## Ejecutar

```sh
npm install
npm run dev
```

Abrir http://localhost:3007. `npm run build` valida TypeScript y exporta la web a `out/`. No se publica automáticamente.

Búsqueda, filtros, favoritos, detalle y bolsa con cantidades y persistencia local (`sdc-demo`). Newsletter simulado. No se procesan pedidos, pagos, consultas ni correos reales. La marca no suministró ubicación, Instagram, WhatsApp, precios ni condiciones comerciales: no se inventaron datos.

## Imágenes y logo

El logo original se conserva en `public/images/sdc-logo-original.png`. La versión restaurada con fondo transparente está en `public/images/sdc-logo-restored.png`; la web usa `public/images/sdc-logo.webp`, optimizado sin pérdida y preservando el canal alfa. Las cuatro fotos originales se optimizan a WebP sin reducir sus dimensiones.

El catálogo utiliza la foto original de pulseras y tres imágenes de producto generadas con IA a partir de las referencias, sobre satén marfil. Son muestras ilustrativas que deben sustituirse o validarse con el catálogo autorizado antes de una publicación comercial. Nombres, especificaciones y disponibilidad no constituyen fichas confirmadas. El hero y los bloques editoriales utilizan exclusivamente las fotos del usuario.

Herramienta utilizada: ImageGen integrada, sin CLI ni claves API. Prompts y archivos finales documentados en [ASSETS.md](ASSETS.md).
