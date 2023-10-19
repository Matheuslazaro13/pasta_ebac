const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"))
const sourceMaps = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")


function copilaSass(){
    return gulp.src("./source/styles/main.scss")
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(sourceMaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"))
}

function comprimeJs(){
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"))
}

function fotos(){
    return gulp.src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"))
}


exports.default = function(){
    gulp.watch("./source/styles/*.scss", {ignoreInitial: false}, gulp.series(copilaSass))
    gulp.watch("./source/scripts/*.js", {ignoreInitial: false}, gulp.series(comprimeJs))
    gulp.watch("./source/images/*", {ignoreInitial: false}, gulp.series(fotos))
}