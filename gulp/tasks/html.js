module.exports = function() {
  $.gulp.task("html", function() {
    return $.gulp
      .src("app/html/**.html")
      .pipe($.gp.rigger())
      .pipe($.gulp.dest("public"))
      .on("end", $.browserSync.reload);
  });
};
