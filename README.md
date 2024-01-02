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
`align-item` alinear contenido verticalmente (inicio, fin, centro)
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
````

Recomendaciones:
> Iniciar los estilos con la parte de los globales.
> Primero colocar estilos a los elementos y posteriormente posicionarlo en el grid.
> Seleccionar	la clase padre e ir al elemento hijo mediante selector.
> colocar labels junto a los inputs.

### Proyecto 02 - FlexBox Básicos