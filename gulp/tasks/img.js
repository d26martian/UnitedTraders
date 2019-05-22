module.exports = function() {
  $.gulp.task("img:dev", function() {
    return $.gulp
      .src("app/static/img/*.{png,jpg,gif}")
      .pipe($.gulp.dest("public/static/img/"));
  });

  $.gulp.task("img:build", function() {
    return $.gulp
      .src("app/static/img/*.{png,jpg,gif}")
      .pipe($.gp.tinypng("8axUrXObxeWe7iU23aTAH9LrAZ9b5CEA"))
      .pipe($.gulp.dest("public/static/img/"));
  });
};
