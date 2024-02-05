const { src, dest, watch, series, parallel } = require('gulp');

// CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done) {
    // Compilar Sass
    // Pasos: 1. identificar archivo, 2. Compilar archivo, 3. Guardar archivo

    src('src/scss/app.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'))

    done()
}

function imagenes() {
    return src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'))
}

function imagenWebp() {
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp())
        .pipe(dest('build/img'))
}

function imagenAvif() {
    return src('src/img/**/*.{png,jpg}')
        .pipe(avif())
        .pipe(dest('build/img'))
}

function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/img/**/*', imagenes)
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.imagenWebp = imagenWebp;
exports.imagenAvif = imagenAvif;

// series - Se inicia una nueva tarea, y hasta que finaliza comienza la siguiente
// parallel - Todas inicial al mismo tiempo
exports.default = series(css, dev);