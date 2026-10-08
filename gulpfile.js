const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp.src("scss/style.scss").pipe(sass()).pipe(gulp.dest("css/"));
}

function watch() {
  gulp.watch("scss/style.scss", compileSass);
}

exports.default = watch;
