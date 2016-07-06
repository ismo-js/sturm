const gulp = require("gulp")
const yaml = require("gulp-yaml")

gulp.task("pkg-yaml", ()=> gulp
  .src("src/*.yaml")
  .pipe(yaml({space: 2}))
  .pipe(gulp.dest("lib/"))
)

/*TODO write rules to convert json back to yaml if json has changed*/

gulp.task("watch", ()=> gulp
  .watch("src/*.yaml", ["pkg-yaml"])
)
