// List Projects
	const projects = [
		{
			name: 'dpm-ptsp',
			script: [
				"node_modules/jquery/dist/jquery.min.js",
				"node_modules/popper.js/dist/umd/popper.min.js",
				"node_modules/bootstrap/dist/js/bootstrap.min.js"
			]
		},
		{
			name: 'ptsp-makassar',
			script: [
				"node_modules/jquery/dist/jquery.min.js",
				"node_modules/popper.js/dist/umd/popper.min.js",
				"node_modules/bootstrap/dist/js/bootstrap.min.js"
			]
		},
		{
			name: 'sdp',
			script: [
				"node_modules/jquery/dist/jquery.min.js",
				"node_modules/popper.js/dist/umd/popper.min.js",
				"node_modules/bootstrap/dist/js/bootstrap.min.js",
				"node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
				"node_modules/select2/dist/js/select2.min.js"
			]
		},
	]

// Available Package
	const gulp = require('gulp')
	const runSequence = require('run-sequence')
	const browserSync = require('browser-sync')
	const sass = require('gulp-sass')
	const concatJs = require('gulp-concat')
	const autoprefixer = require('gulp-autoprefixer')
	const notify = require('gulp-notify')
	const inject = require('gulp-inject')
	const uglifyjs = require('gulp-uglifyjs')
	const uglifycss = require('gulp-uglifycss')

// Const Path
	const path = (project) => {
		let data = {
			src: 'src/' + project,
			sass: 'src/' + project + '/assets/sass',
			styles: 'src/' + project + '/assets/css',
			images: 'src/' + project + '/assets/images',
			js: 'src/' + project + '/assets/js',
			scripts: 'src/' + project + '/assets/scripts',
			libraries: 'src/' + project + '/assets/scripts/libraries.js',
			customjs: 'src/' + project + '/assets/scripts/app.js',
		}
		return data;
	}

// Project Path
	const paths = new Object()
	for (var i = 0; i < projects.length; i++) {
		paths[projects[i].name] = path(projects[i].name)
	}

// JS libraries Path
	const libraries = {
		scripts: [
			'node_modules/bootstrap/dist/js/bootstrap.min.js'
		]
	}

// Sass
	const sassFunc = (project) => {
		gulp.task('sass', () => {
			return gulp.src(`${paths[project].sass}/app.scss`)
				.pipe(sass().on('error', sass.logError))
				.pipe(autoprefixer())
				.pipe(gulp.dest(`${paths[project].styles}/`))
				.pipe(notify({ message: 'Sass compile task complete' }))
		})
		runSequence('sass')
	}

// Watch Sass
	const watchFunc = (project) => {
		gulp.task('watch', () => {
			browserSync.init({
				server: `./src/${project}`,
				port: 2222
			})

			gulp.watch([paths[project].sass + '/*.scss'], ['sass'])
			gulp.watch([`${paths[project].styles}/*.css`, paths[project].images, `${paths[project].src}/*.html`])
				.on('change', browserSync.reload)
		})
		runSequence('watch')
	}

// When add new Library, run this script!
	const concatFunc = (project, project_script) => {
		return gulp.src(project_script, { base: paths[project].scripts})
			.pipe(concatJs('libraries.js'))
			.pipe(gulp.dest(paths[project].scripts))
			.pipe(notify({ message: 'Concat task complete' }))
	}

// Copy Files
	const copyFunc = (project) => {
		dir = ['images', 'fonts']
		
		// Copy
		for (var i = 0; i < dir.length; i++) {
			gulp.src('src/' + project + '/assets/' + dir[i] + '/**/*')
				.pipe(gulp.dest('public/' + project + '/assets/' + dir[i]))
		}

		// Copy HTML
		gulp.src('src/' + project + '/*.html')
			.pipe(gulp.dest('public/' + project))
	}

// Injector
	const injectorFunc = (project) => {
		let css = gulp.src('public/' + project + '/assets/css/app.css');
		let js = gulp.src('public/' + project + '/assets/js/bundle.js');
		return gulp.src('public/' + project + '/*.html')
			.pipe(inject(css, {relative: true}))
			.pipe(inject(js, {relative: true}))
			.pipe(gulp.dest('public/' + project))
	}

// Execution
	for (var i = 0; i < projects.length; i++) {
		let project = projects[i].name
		let project_script = projects[i].script
		
		// Generate Sass and Watch
		gulp.task(project, () => {
			sassFunc(project)
			watchFunc(project)
		})

		// Concat new plugin
		gulp.task(`concat-${project}`, () => {
			concatFunc(project, project_script)
		})
		
		// Combine libraries js and custom js
		gulp.task(`build-${project}`, () => {
			let concatScript = [
				paths[project].libraries,
				paths[project].customjs
			]
			gulp.src(concatScript)
				.pipe(concatJs('bundle.js'))
				.pipe(gulp.dest(paths[project].js))
				.pipe(notify({ message: 'Scripts task complete' }))

			// Minify js
			gulp.src('src/' + project + '/assets/js/bundle.js')
				.pipe(uglifyjs())
				.pipe(gulp.dest('public/' + project + '/assets/js'))

			// Minify css
			gulp.src('src/' + project + '/assets/css/app.css')
				.pipe(uglifycss({
					"uglyComments": true
				}))
				.pipe(gulp.dest('public/' + project + '/assets/css'))
			
			copyFunc(project)
		})

		// Inject
		gulp.task(`inject-${project}`, () => {
			injectorFunc(project)
		})
	}







