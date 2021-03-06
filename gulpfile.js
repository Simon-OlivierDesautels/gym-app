const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./styles/main.scss")

    .pipe(sass())

    .pipe(gulp.dest("./css"))

    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })

    gulp.watch("./styles/**/*.scss",style)
}

exports.style = style;
exports.watch = watch;