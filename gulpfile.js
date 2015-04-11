var gulp                = require('gulp');
var concat              = require('gulp-concat');
var react               = require('gulp-react');
var bower               = require('gulp-bower');
var mainBowerFiles      = require('main-bower-files');
var sourcemaps          = require('gulp-sourcemaps');
var to5                 = require('gulp-6to5');
var es6ModuleTranspiler = require("gulp-es6-module-transpiler");
var notify              = require("node-notifier");
var del                 = require("del");
var opn                 = require('opn');
var browserify          = require('browserify');
var watchify            = require('watchify');
var reactify            = require('reactify');
var source              = require('vinyl-source-stream');
var connect             = require('connect');
var connectreload       = require('connect-livereload');
var serveStatic         = require('serve-static');
var serveIndex          = require('serve-index');
var livereload          = require('gulp-livereload');

gulp.task('serve', ['browserify', 'build-web', 'connect', 'watch'],function(){
   opn('http://localhost:9000/example/example.html');
});

gulp.task('connect', function() {
    var app = connect()
        .use(connectreload({
            port: 35729
        }))
        .use(serveStatic('./'))
        .use(serveIndex('./example/example.html'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:9000/example/example.html');
        });
});

/* browserify */
gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./example/example.js'], // Only need initial file
        transform: [reactify], // Convert JSX to javascript
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    var watcher = watchify(bundler);

    return watcher
        .on('update', function() { // On update When any files updates
            var updateStart = Date.now();
            watcher.bundle()
                .pipe(source('bundle.js'))
                .pipe(gulp.dest('./example/'));
            console.log('Updated ', (Date.now() - updateStart) + 'ms');
        })
        .bundle() // Create initial bundle when starting the task 
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./example/'));
});

gulp.task('build-web', function () {
  return gulp.src('jsx/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(react({harmony: true}))
    .on('error', function(error) {
      console.log(error.fileName, error.message)
      notify.notify({
        title: error.fileName.replace(__dirname, ''),
        message: error.message
      })

      this.emit('end')
    })
    .pipe(es6ModuleTranspiler({type: "amd"}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'));
})

gulp.task('build', ['build-web'])

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch([
        './js/*.js'
    ]).on('change', livereload.changed);

    gulp.watch('./jsx/*.jsx', ['build-web']);
})

gulp.task('default', ['serve']);

// gulp.task('clean', function(cb) {
//   del(['public/js'], cb);
// });

// gulp.task('build-deps', function () {
//   return gulp.src('lib')
//     .pipe(concat('vendor.js'))
//     .pipe(gulp.dest('public/js'));
// })