const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Linguistics licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* 
* Copyright 2020 Linguistics (https://linguistics.one)
* Licensed under MIT 

* Coded by Linguistics

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Linguistics licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* 
* Copyright 2020 Linguistics (https://linguistics.one)
* Licensed under MIT 

* Coded by Linguistics

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Linguistics licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* 
* Copyright 2020 Linguistics (https://linguistics.one)
* Licensed under MIT 

* Coded by Linguistics

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
