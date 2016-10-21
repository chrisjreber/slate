const gutil = require('gulp-util');

/**
 * slate-cli configuration object
 * ## Markdown stuff
 *
 * It's a big description written in `markdown`
 *
 * Example:
 *
 * ```javascript
 * $('something')
 *   .something(else);
 * ```
 *
 * @namespace config
 * @memberof slate-cli
 * @summary Configuring slate-cli
 *  @prop {String} environment - development | staging | production
 *  @prop {String} tkconfig - path to themekit config file
 *  @prop {String} scssLintConfig - path to scss-lint config file
 *  @prop {String} deployLog - path to deploy log file
 *  @prop {String} src - globs (multi-filename matching patterns) for various source files
 *  @prop {Object} dist - paths to relevant folder locations in the distributable directory
 *  @prop {Object} roots - array of "root" (entry point) JS & CSS files
 *  @prop {Object} plugins - configuration objects passed to various plugins used in the task interface
 */
const config = {
  environment: gutil.env.environments || 'development',
  enableLinting: false,

  tkConfig: 'config.yml',
  scssLintConfig: '.scss-lint.yml',
  deployLog: 'deploy.log',

  src: {
    root: 'src/',
    js: 'src/scripts/**/*.{js,js.liquid}',
    jsSections: 'src/sections/**/*.js',
    vendorJs: 'src/scripts/vendor/*.js',
    json: 'src/**/*.json',
    css: 'src/styles/**/*.{scss,scss.liquid}',
    cssLint: 'src/styles/**/*.scss',
    vendorCss: 'src/styles/vendor/*.scss',
    assets: 'src/assets/**/*',
    icons: 'src/icons/**/*.svg',
    templates: 'src/templates/**/*',
    snippets: 'src/snippets/*',
    sections: 'src/sections/**/*',
    sectionsDir: 'src/sections/',
    locales: 'src/locales/*',
    config: 'src/config/*',
    layout: 'src/layout/*'
  },

  dist: {
    root: 'dist/',
    assets: 'dist/assets/',
    snippets: 'dist/snippets/',
    sections: 'dist/sections/',
    layout: 'dist/layout/',
    templates: 'dist/templates/',
    locales: 'dist/locales/'
  },

  roots: {
    js: 'src/scripts/*.{js,js.liquid}',
    vendorJs: 'src/scripts/vendor.js',
    css: 'src/styles/*.scss'
  },

  plugins: {
    cheerio: {
      run: require('./utilities.js').processSvg
    },
    svgmin: {
      plugins: [{removeTitle: true}, {removeDesc: true}]
    }
  }
};

module.exports = config;