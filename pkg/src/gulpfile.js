import g from "gulp"
import ava from "gulp-ava"

g.task("test", ()=> g
  .src("src/*.ava.js")
  .pipe(ava())
  .pipe(g.dest('lib/'))
)
