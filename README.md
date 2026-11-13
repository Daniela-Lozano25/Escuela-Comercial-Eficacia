# Centro de Conocimiento Comercial

Plataforma web estática (HTML, CSS y JavaScript) para consultar contenidos de **Desarrollo Comercial** y **Trade Marketing**. Responsive: funciona en PC y móvil. No requiere instalación ni servidor.

## Estructura
```
index.html        Página principal
css/styles.css    Estilos
js/data.js        Contenido (editar aquí)
js/app.js         Navegación y lógica
```

## Publicar en GitHub Pages
1. Cree un repositorio en GitHub y suba todos estos archivos a la rama `main`.
2. Vaya a **Settings → Pages**.
3. En **Source**, elija **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. Guarde. En un par de minutos el sitio estará en `https://SU-USUARIO.github.io/NOMBRE-REPO/`.

## Agregar contenido
Edite `js/data.js`: cada área tiene `modulos`, y cada módulo tiene `items` con `q` (pregunta) y `a` (respuesta).

## Probar en local
Abra `index.html` en el navegador, o ejecute `python -m http.server` en la carpeta.
