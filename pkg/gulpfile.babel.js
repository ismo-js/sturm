import g from "gulp"
import yaml from "gulp-yaml"

export function yamly() {
  return g
    .src("src/*.yaml")
    .pipe(yaml({space: 2}))
    .pipe(g.dest("lib/"))
}

export default async function build(d) {
  return await g.parallel(yamly)()
}
