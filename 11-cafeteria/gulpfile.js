const { src, dest, watch, series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
    // Compilar Sass
    // Pasos: 1. identificar archivo, 2. Compilar archivo, 3. Guardar archivo

    src('src/scss/app.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'))

    done()
}

function dev() {
    watch('src/scss/**/*.scss', css)
}


exports.css = css
exports.dev = dev

// series - Se inicia una nueva tarea, y hasta que finaliza comienza la siguiente
// parallel - Todas inicial al mismo tiempo

exports.default = series (css, dev)