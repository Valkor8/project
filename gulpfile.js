"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp")
const sync = require("browser-sync").create();

// Styles

const styles = () => {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer(),
            csso()
        ]))
        .pipe(sourcemap.write("."))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("source/css"))
        .pipe(sync.stream());
}

exports.styles = styles;

// Images

const images = () => {
    return gulp.src("source/img/**/*.{jpg,png,svg}")
        .pipe(imagemin([
            imagemin.mozjpeg({progressive: true}),
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("dist/img"));
}

exports.images = images;

// Webp

const createWebp = () => {
    return gulp.src("source/img/**/*.{jpg,png}")
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest("source/img"))
}

exports.createWebp = createWebp;

//  Сервер

const server = (done) => {
    sync.init({
        server: {
            baseDir: 'source'
        },
        notify: false,
        cors: true,
        ui: false
    });
  done();
}

exports.styles = styles;

// Watcher

const watcher = () => {
    gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
    gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
    styles, server, watcher
);
