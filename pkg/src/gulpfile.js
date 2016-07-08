import gulp from "gulp"
import ava from "gulp-ava"

gulp.task("test", ()=> gulp
  .src("src/*.ava.js")
  .pipe(ava())
)
