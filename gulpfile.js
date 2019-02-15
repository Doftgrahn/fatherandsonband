// 'use strict';
let paths = {
    styles: {
        src: './src/styles/**/*.scss',            //Source files
        dest: './styles/',                //Public destination to folder
        pubDest: './styles/**/*.css'     //Public destination to files in folder
    },
    scripts: {
        src: './src/js/**/*.js',                //Source files
        dest: './js/',                   //Public destination to folder
        pubDest: './js/**/*.js'          //Public destination to files in folder
    },
    fonts: {
        src: './src/fonts/**/*',
        dest: './fonts/',
    },
    images: {
		src: './src/images/**/*',
		dest: './images/',
	}
};

//general
const gulp = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const notify = require('gulp-notify');
const buffer = require('vinyl-buffer');

// styles
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
// const swiper = require('swiper');

// js
const source = require('vinyl-source-stream');
let uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');

/*
*  Error handling
*/
const handleError = function (task, err) {
    gutil.beep();

    notify.onError({
        message: task + ' failed, check the logs..',
        sound: false
    })(err);

    gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
};

/*
*  Pack Style and Scrips
*/
gulp.task('sass', function(done) {
    gulp.src(paths.styles.src)
		.pipe(sass({includePaths: ['scss']}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.styles.dest));
    done();
});

gulp.task('pack-styles', function () {
   return gulp.src(paths.styles.src)
	   .pipe(sass({includePaths: ['scss']}))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(concat('main.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('js', function () {
    return browserify({ entries: './src/js/app.js', debug: true})
        .transform('babelify', {
            presets: ['es2015'],
            plugins: ["transform-object-assign", ['transform-es2015-classes', {loose: true}]]
        })
        .bundle()
        .on('error', function(err) {
            handleError('Browserify', err);
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('pack-js', function () {
    return browserify({ entries: './src/js/app.js', debug: true})
        .transform('babelify', {
            presets: ['es2015'],
            plugins: ["transform-object-assign", ['transform-es2015-classes', {loose: true}]]
        })
        .bundle()
        .on('error', function(err) {
            handleError('Browserify', err);
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
});


/*
* Static files
*/
gulp.task('images', function() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task('fonts', function() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
});

/*
* Build tasks
*/
gulp.task('browser-sync', function(done) {
    browserSync.init([paths.styles.pubDest, paths.scripts.pubDest], {
        server: {
            baseDir: "./",
        },
		notify: true,
		open: false
    });
    done();
});

/*
* Watch files.
*/
gulp.task('watch', gulp.parallel('sass', 'js', 'images', 'fonts', 'browser-sync', function (done) {
    let styleWatcher = gulp.watch([paths.styles.src]);
    let scriptWatcher = gulp.watch([paths.scripts.src]);
    let imageWatcher = gulp.watch([paths.images.src]);
    let fontWatcher = gulp.watch([paths.fonts.src]);

    styleWatcher.on('all', gulp.series('sass', function(done) {
        console.log('change in style');
        done();
    }));

    scriptWatcher.on('all', gulp.series('js', function(done) {
        console.log('change in script');
        done();
    }));

    imageWatcher.on('all', gulp.series('images', function(done) {
        console.log('change in image');
        done();
    }));

    fontWatcher.on('all', gulp.series('fonts', function(done) {
        console.log('change in fonts');
        done();
    }));

    done();
}));

/*
* Build and minify project
*/
gulp.task('build', gulp.series('images', 'fonts', 'pack-styles', 'pack-js', function (done) {
    console.log('Minify and build project');
    done();
}));
