/*import g from "gulp"
import yaml from "gulp-yaml"
*/


const g = require("gulp")
const yaml = require("gulp-yaml")

export function yamly() {
  g
    .src("src/*.yaml")
    .pipe(yaml({space: 2}))
    .pipe(gulp.dest("lib/"))
)

export default function build() {
  g
    .parallel(yamly)
}
