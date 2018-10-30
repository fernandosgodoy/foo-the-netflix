var karmaServer = require('karma').Server;

gulp.task('test', function(done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }).start();
});
