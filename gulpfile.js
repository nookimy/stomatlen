var gulp      = require('gulp'), // Подключаем Gulp
    less        = require('gulp-less'), //Подключаем Less пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('less', function(){ // Создаем таск Less
    return gulp.src('source/less/style.less') // Берем источник
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
        .pipe(gulp.dest('source/css')) // Выгружаем результат в папку source/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'source' // Директория для сервера - source
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
  return gulp.src(['source/js/common.js', 'source/libs/**/*.js'])
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
  return gulp.src('source/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
  gulp.watch('source/less/**/*.less', gulp.parallel('less')); // Наблюдение за less файлами
  gulp.watch('source/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
  gulp.watch(['source/js/common.js', 'source/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});

gulp.task('default', gulp.parallel('less', 'browser-sync', 'watch'));
