module.exports = function() {
  $.gulp.task("sass", function() {
    var autoprefixerOptions = {
      browsers: ["last 2 versions", "> 5%", "Firefox ESR"]
    };
    return $.gulp
      .src("app/static/sass/*.sass")
      .pipe($.gp.sourcemaps.init())
      .pipe(
        $.gp.sass({
          includePaths: ["node_modules"]
        })
      )
      .pipe($.autoprefixer(autoprefixerOptions))
      .on(
        "error",
        $.gp.notify.onError({
          title: "style"
        })
      )
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write("../maps"))
      .pipe($.gulp.dest("public/static/css/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
