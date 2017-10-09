/**
 * Created by Monkey on 2017/10/9.
 */
var gulp = require("gulp"),
    uglifyJS = require("gulp-uglify"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify");

gulp.task("server", function () {
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglifyJS())
        .pipe(gulp.dest("./js/"))
        .pipe(notify({messafe:"OK!"}))
})