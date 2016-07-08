import g from "gulp"
import yaml from "gulp-yaml"

export function yamly() {
  return g
    .src("src/*.yaml")
    .pipe(yaml({space: 2}))
    .pipe(gulp.dest("lib/"))
}

export default function build() {
  return g
    .parallel(yamly)
}
