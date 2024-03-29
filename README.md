# css-guia-completa-2
CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos

### Proyecto 01 - Ecommerce
Enlaces de la documentación vista en el curso:
* [Semántica HTML](https://blog.hubspot.com/website/semantic-html)

* [Intro FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

* [Intro Css Grid](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-introduction)

* [CSS Normalize](https://necolas.github.io/normalize.css/)

#### Notas del curso:

**Margin** toma distancia hacia afuera del elemento.

**Padding** toma distancia hacia adentro del elemento.

**display: block;** el elemento se coloca por debajo del otro sin importar su tamaño.

**display: inline;** el elemento se posiciona a la derecha una vez que haya tomado el espacio que requiere.

**display: inline-block;** permite dar width, height y margin a un elemento inline.

**Imagénes**
Código para el tamaño de las imágenes desde los globales:
```css
img {
    max-width: 100%; /* toma el 100% del tamaño de su contenedor */
    display: block;
}
```
Propiedades básicas para definir una imagen con css: 
```css 
div {
    background-image: url('../img/principal.jpg');  /* url > la ubicación es relativa  */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 550px;
}
```
Código para mejorar estilos de una imagen:
```css 
img {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
} 
```

**FlexBox** - se aplica solamente al primer nivel de hijos y el contenido crece automáticamente.

`justify-content` alinear contenido horizontalmente(izq, der, centro).

`align-item` alinear contenido verticalmente (inicio, fin, centro).

Si el flex direction es column:

`justify-content` alinear contenido verticalmente (inicio,fin, centro).

`align-item` alinear contenido horizontalmente( izq, der, centro).

**CSS Grid**  - permite definir la ubicación y el tamaño de tu sitio. El contenido se agrupa dentro de un área definida
La propiedad `gap` sirve para dejar espacio entre los elementos hijos del grid.

> **Cuando usar Css Grid ó FlexBox**
>
> _Flexbox_ usarlo para la alineación o distribución de los elementos que estarán dentro de contenedores.
>
> _CSS Grid_ implementalo para definir el layout de tu sitio web, como pueden ser las columnas o contenedores de elementos. 

**Fuentes**
La propiedad `font-family` se usa para cambiar las fuentes, ajustalo en las propiedades globales de tu style.css

> Nota: Tu página/sitio debe contar con 3 fuentes máximo.

**Unidades**

_Absolutas_ son las que son exactas: cm y pixeles.

_Relativas_ toman su valor en base a otro elemento em, rem, vh, vw y porcentaje.

Por default se aplica un font-size de 16 px, ajusta tu reglas de estilo colocando tamaña de letra por default en rems: 
```css
html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px */
}
```

Recomendaciones:
> Iniciar los estilos con la parte de los globales.
> Primero colocar estilos a los elementos y posteriormente posicionarlo en el grid.
> Seleccionar	la clase padre e ir al elemento hijo mediante selector.
> colocar labels junto a los inputs.

### Proyecto 02 - FlexBox Básicos
Propiedades por default se establece cuando el display del contenedor padre es:  `display: flex;`

- Container
* `flex-direction: row;`
* `justify-content: flex-start;`
* `align-items: strech;`

- Items
* `flex-grow: 0;`
* `flex-shrink: 1;`
* `flex-basis: 0%`

Sitio para practicar FlexBox - [Froggy](https://flexboxfroggy.com/).

[Guía](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) para usar FlexBox.

**flex-wrap (flex-container)**
- permite agrupar contenido

**flex-basis (flex-items)** 
- valor inicial de un elemeno
- soporta ancho con relativos o absolutos 

**flex-grow  (flex-items)**
- factor de crecimiento de los elementos

**flex-shrink (flex-items)**
- factor de reducción de los elementos

**flex shorthand (flex-items)**
- `flex-grow` | `flex-shrink` | `flex-basis`

### Proyecto 03 - CSS Básicos
Habilitar las propiedades de grid colocando `display: grid;` en el contenedor padre.

Sitio para practicar [CSS Grid](https://codepip.com/games/grid-garden/).

[Guía](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-display) para usar CSS Grid.

**grid shorthand (Container)**

`grid: <grid-rows> / grid: <grid-columns>`

**auto-flow** posiciona los elementos automaticamente, evita el salto de fila en el grid:

```css
.grid {
    display: grid;
    grid-auto-flow: dense;
}
```

**align-items** sirve para la alineación vertical de los elementos:
```css
.grid {
    height: 300px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
}
```

**auto-fill** genera columnas mientras tenga espacio el contenedor.

**auto-fit** genera las columnas necesarias.

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### Proyecto 04 - Selectores

`.clase1.clase2` - seleccionar un elemento HTML a través de 2 clases o más:
```css
.texto.mayusculas {
    font-size: 10rem;
}
```

`etiqueta.clase` - selecciona un elemento especificando etiqueta y clase:
```css
div.texto {
    background-color: aqua;
}
```

`clase > clase/elemento/etiqueta` - selecciona al **primer nivel** de hijos:

```html
<div class="admin">
    <div>
        <p>Has Iniciado sesión como: Admin</p>
            <div>
                <p>Cerrar Sesión aquí</p>
            </div>
    </div>
</div>
```

```css
.admin > div {
    border: 2px solid salmon;
}
```

`elemento[atributo]` - selecciona elemento por sus atributos:
```css
a[href^="http"] {
    color: salmon;
}
```

`elemento:not(clase)` selecciona elementos excepto uno o unos:
```css
p:not(.texto):not(.clase) {
    color: salmon;
}
```

### Proyecto 05 - Responsive Web Design

`max-width` - ancho máximo para el elemento, media querie para desktop first, se recomienda implementar los medias queries del más grande al pequeño.

`min-width` - ancho mínimo para el elemento, usar media querie para mobile first, se recomienda implementar los medias queries del más pequeño al mq grande.

> Nota: Se recomienda aplicar media queries con un solo enfoque: `Desktop First` ó `Mobile First`.

Para configurar snippets dentro de VSC: **command + shift + p** > configure user snippets > css.json

#### Tamaños Standar para HTML responsivo

Dispositivos móviles:
```css
@media (min-width: 550px) { 
    ...
}
```
Tablets:
```css
@media (min-width: 768px) { 
    ...
}
```
Landspace:
```css
@media (min-width: 1024px) { 
    ...
}
```
Laptop:
```css
@media (min-width: 1200px) { 
    ...
}
```
Monitores:
```css
@media (min-width: 1600px) { 
    ...
}
```

#### Contenedores Responsivos

Se puede implementar la propiedad min(valor-minimo, valor-maximo)

```css
.contenedor-responsive {
    background-color: aliceblue;
    width: min(90%, 1000px);
    height: 400px;
    margin: 0 auto;
}
```

#### Snippet para imágenes resposivas

La imagen crecera hasta su tamaño máximo natural:
```css
img {
    max-width: 100%;
    display: block;
}
```

### Proyecto 7 -  recomendaciones CSS

#### Custom Properties
```css
:root {
    --variable1: 'propiedad css';
    ...
}
```