const g = require("gulp")
const yaml = require("gulp-yaml")

g.task("pkg-yaml", ()=> g
  .src("src/*.yaml")
  .pipe(yaml({space: 2}))
  .pipe(gulp.dest("lib/"))
)

g.task("bablify" ()=> g
  .src("src/*.js")
  .pipe(babel())
  .pipe(gulp.dest('lib/'))
)

/*TODO write rules to convert json back to yaml if json has changed*/

g.task("watch", ()=> g
  .watch("src/*", ["pkg-yaml", "bablify"])
)
