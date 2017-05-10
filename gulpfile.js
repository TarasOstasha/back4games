var gulp 		 = 	require('gulp'),
	nano 	     = 	require('gulp-cssnano'),
	browserSync  = 	require('browser-sync'),
	concat 		 = require('gulp-concat'),
	uglify		 = require('gulp-uglify'),
	addSrc		 = require('gulp-add-src'),
	imagemin 	 = require('gulp-imagemin'),
    pngquant	 = require("imagemin-pngquant"),
	less 		 = require('gulp-less'),
	//rename 		 = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task("less", function() {
	return gulp.src([
			"./src/styles/main.less"
			])
		.pipe(less())
		.pipe(autoprefixer(['last 15 versions', 'ie 8', 'ie 7'], { cascade: true}))
		.pipe(nano())
		// .pipe(rename({suffix: 'min'})) - таким чином добавляється суфікс

		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task("bower-css", function() {
	return gulp.src([
			"src/bower/bootstrap/dist/css/bootstrap.css",
			"src/bower/toastr/toastr.min.css",
			"src/bower/components-font-awesome/css/font-awesome.min.css",
			"src/bower/jparallax/css/jquery.parallax.css",
			"src/bower/jparallax/css/base.css",
			"src/bower/slick-carousel/slick/slick-theme.css",
        	"src/bower/slick-carousel/slick/slick.css",
       		"src/bower/pwstabs/assets/jquery.pwstabs.css",
			"src/bower/mislider-master/dist/css/mislider.css",
        	"src/bower/mislider-master/dist/css/mislider-cameo.css",
		 	"src/bower/mislider-master/dist/css/mislider-skin-cameo.css",
        	"src/bower/mislider-master/dist/css/mislider-skin-cameo.css",
			"src/bower/bxslider-4/dist/jquery.bxslider.min.css",
			"src/bower/animate.css/animate.min.css",
        	"src/bower/fancybox/dist/jquery.fancybox.min.css",
			"src/bower/jquery-listnav/css/listnav.css",
			"src/bower/jquery-flipster/dist/jquery.flipster.min.css",
			"src/bower/pintsize-master/dist/pintsize.min.css"


		])
	.pipe(sourcemaps.init()) //ініціалізація кроків
	.pipe(nano())
	.pipe(concat("bower.min.css"))
	.pipe(sourcemaps.write()) //запис карти
	.pipe(gulp.dest('dist/css'));
});

gulp.task("images", function() {
	return gulp.src("./src/images/**/*.{jpg,png}")
		 .pipe(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
		}))
		.pipe(gulp.dest("dist/images"))
});

gulp.task("fonts", function() {
	return gulp.src([
		"src/bower/bootstrap/dist/fonts/*.*",
		"src/fonts/*",
        "src/bower/components-font-awesome/fonts/*.*"

	])
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task("html", function() {
	return gulp.src([
				"src/**/*.html"
	])
		.pipe(gulp.dest("dist"));
});

gulp.task('bower-js', function() {
	return gulp.src([
        "src/bower/slideout.js/dist/slideout.min.js",
        "src/bower/fancybox/dist/jquery.fancybox.min.js",
        "src/bower/jparallax/js/jquery.parallax.js",
		"src/bower/bootstrap/dist/js/bootstrap.js",
		"src/bower/toastr/toastr.js",
        "node_modules/parallax-js/deploy/parallax.min.js",
		"src/bower/slick-carousel/slick/slick.min.js",
		"src/bower/pwstabs/assets/jquery.pwstabs.min.js",
		"src/bower/mislider-master/dist/js/mislider.min.js",
        "src/bower/bxslider-4/dist/jquery.bxslider.min.js",
        "src/bower/jquery.easing/js/jquery.easing.js",
		"src/bower/jquery.easing/js/jquery.easing.compatibility.js",
		"src/bower/slider-top/carouFredSel-jQuery/jquery.carouFredSel-6.2.1-packed.js",
		"src/bower/jquery-listnav/jquery-listnav.min.js",
		"src/bower/jQuery-Waterwheel-Carousel/js/jquery.waterwheelCarousel.min.js",
		"src/bower/jquery-flipster/dist/jquery.flipster.min.js",
        "src/bower/Tabslet/jquery.tabslet.min.js",
		"src/bower/chart.js/dist/Chart.bundle.min.js",
		"src/bower/chart.js/dist/Chart.min.js",
		"src/bower/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"
	])
	.pipe(addSrc.prepend("src/bower/jquery/dist/jquery.js"))
	.pipe(concat('bower.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('main-js', function() {
	return gulp.src([
		"src/scripts/main.js"

	])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'less', 'main-js'], function() {
	gulp.watch('src/styles/**/*.less', ['less']);
	gulp.watch('src/*.html', ['html']);
	gulp.watch('dist/*.html', browserSync.reload);
	gulp.watch('src/scripts/*.js', ['main-js']);
	gulp.watch('dist/js/*.js', browserSync.reload);
});	

gulp.task('default', ['html', 'images', 'less', 'watch', 'bower-css', 'bower-js', 'fonts', 'main-js']);