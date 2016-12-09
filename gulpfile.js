var gulp           = require('gulp'),
	browserSync    = require('browser-sync').create(),
	rigger         = require('gulp-rigger'),
	watch          = require('gulp-watch'),
	spritesmith    = require('gulp.spritesmith'),
	less           = require('gulp-less'),
	imagemin       = require('gulp-imagemin'),
	autoprefixer   = require('gulp-autoprefixer');
	// watchLess      = require('gulp-watch-less'),
	// uglify         = require('gulp-uglify'),
	// plumber        = require('gulp-plumber'),
	// pngquant       = require('imagemin-pngquant'),
	// jsmin          = require('gulp-jsmin'),
	// rename         = require('gulp-rename');

//HTML
gulp.task('html', function(){
	gulp.src('src/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('build/'))
		.pipe(browserSync.stream());
});

// CSS
gulp.task('css', function(){
	gulp.src('src/styles/*.css')
		.pipe(rigger())
		.pipe(gulp.dest('build/styles'))
		.pipe(browserSync.stream());
});

// less
gulp.task('less', function () {
    return gulp.src('src/styles/*.less')
        // .pipe(watchLess('src/styles/*.less'))
        .pipe(less())
        .pipe(autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false
         }))
        // .pipe(plumber.stop())
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.stream());
});

// IMG
gulp.task('img', function(){
	gulp.src('src/images/**/*')
	.pipe(gulp.dest('build/images/'))
	.pipe(imagemin())
	.pipe(browserSync.stream());
});

// js
gulp.task('js', function(){
	gulp.src('src/js/*.js')
		.pipe(rigger())
		// .pipe(plumber())
		// .pipe(jsmin())
		// .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build/js'))
		.pipe(browserSync.stream());
});

// fonts
gulp.task('fonts', function(){
	gulp.src('src/fonts/**/*.*')
	.pipe(gulp.dest('build/fonts/'))
	.pipe(browserSync.stream());
});

// sprite
gulp.task('sprite', function() {
	var spriteData = 
		gulp.src('./src/sprite/*.*') // путь, откуда берем картинки для спрайта
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.less',
			cssFormat: 'less',
			algorithm: 'binary-tree',
			cssTemplate: 'less.template.mustache',
			imgPath: '../images/sprite.png',
			cssVarMap: function(sprite) {
				sprite.name = 's-' + sprite.name
			}
		}));

		spriteData.img.pipe(gulp.dest('./build/images/')); // путь, куда сохраняем картинку
		spriteData.css.pipe(gulp.dest('./src/styles/')); // путь, куда сохраняем стили
});

//+----------------------------------------------------------------+//

gulp.task('build', ['html', 'less', 'img', 'js', 'fonts', 'css', 'sprite']);

gulp.task('default', ['build', 'watch', 'serve']);

gulp.task('serve', ['watch'], function (){
	browserSync.init({
		server: {
			baseDir: "./build"
		},
		host: "localhost",
		port: 8080,
		tunnel: false,
		directory: true,
		browser: "/Applications/Google Chrome.app"
	});
});

//+----------------------------------------------------------------+//

gulp.task('watch', function(){
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/styles/**/*.less', ['less']);
	gulp.watch('src/styles/**/*.css', ['css']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/images/**/*.*', ['img']);
	gulp.watch('src/fonts/**/*.*', ['fonts']);
});