module.exports = function() {
  $.gulp.task("watch", function() {
    $.gulp.watch("app/html/**/*.html", $.gulp.series("html"));
    $.gulp.watch("app/static/**/*.sass", $.gulp.series("sass"));
    $.gulp.watch("app/static/js/main.js", $.gulp.series("scripts"));
    $.gulp.watch("app/static/img/*", $.gulp.series("img:dev"));
  });
};
