"use srtict";

global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  autoprefixer: require("gulp-autoprefixer"),
  browserSync: require("browser-sync").create(),

  path: {
    tasks: require("./gulp/config/tasks.js")
  }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel("html", "sass", "scripts:lib", "scripts", "img:dev"),
    $.gulp.parallel("watch", "server")
  )
);
$.gulp.task(
  "build",
  $.gulp.series(
    $.gulp.parallel("html", "sass", "scripts:lib", "scripts", "img:build"),
    $.gulp.parallel("watch", "server")
  )
);
