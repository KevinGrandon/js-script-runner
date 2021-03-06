// Karma configuration
// Generated on Wed Dec 09 2015 18:30:03 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
        'mocha',
         'sinon-chai'
    ],

    client: {
        captureConsole: true,
        mocha: { 'ui': 'tdd' }
    },


    // list of files / patterns to load in the browser
    files: [
        'node_modules/babel-polyfill/dist/polyfill.js',
        'browser/js/*.js',
        'browser/test/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
        'browser/js/*.js': ['babel'],
        'browser/test/*.js': ['babel']
    },

    babelPreprocessor: {
        options: {
            presets: ['es2015'],
            sourceMap: 'inline'
        },
        filename: function (file) {
            return file.originalPath.replace(/\.js$/, '.es5.js');
        },
        sourceFileName: function (file) {
            return file.originalPath;
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
