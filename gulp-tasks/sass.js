const {dest, src} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sassProcessor = require('gulp-sass');

// Using canonical Sass rather than node-sass
sassProcessor.compiler = require('sass');

// Flags whether we compress the output,etc.
const isProduction = process.env.NODE_ENV === 'produciton';

// An array of outputs that should be sent over includes 
const criticalStyles = ['critical.scss', 'home.scss'];

// Takes the argument passed by 'dest' and determines where the output file goes
const calculateOutput = ({history}) => {
  // By default, we want a CSS file in out 'dist' directory
  // HTML can grab it with a <link />
  let response = './dist/css';

  // Get everything after the last slash
  const sourceFileName = /[^/]*$/.exec(history[0])[0];

  // If this is critical CSS though, we want it to go to the _includes directory,
  // so that nunjunks can include it directly in a <style>
  if (criticalStyles.includes(sourceFileName)) {
    response = './src/_includes/css';
  }

  return response;
};

// The main Sass method grabs all root Sass files, processes them, and then
// sends them to the output calculator
const sass = () => {
  return src('./src/scss/*.scss')
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
            level: 2
          }
        : {}
      )
    )
    .pipe(dest(calculateOutput, {sourceMaps: !isProduction}));
};

module.exports = sass;