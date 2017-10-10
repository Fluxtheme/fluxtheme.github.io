var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cp          = require('child_process');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// postcss plugins
var cssnext = require("postcss-cssnext");
var cssnano = require('cssnano');
var lost = require('lost');
var atImport = require('postcss-import');

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['css', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


gulp.task('css', function () {
    var plugins = [
        atImport,
        lost(),
        cssnext({
            'browsers': ['last 2 version'],
        }),
        cssnano({ autoprefixer: false })
    ];
    gulp.src('assets/_postcss/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('_site/assets/css'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
      gulp.watch('assets/_postcss/**', ['css']);
      gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_docs/*.md', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
