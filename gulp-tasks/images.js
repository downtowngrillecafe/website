const {dest, src} = require('gulp');
const imagemin = require('gulp-imagemin');

// Grabs all the images and runs them through imagemin
// and puts them in the `dist` folder
const images = () => {
  // We have specific configs for jpg and png files to try to pull down asset sizes
  return src('./src/images/**/*')
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({quality: 60, progressive: true}),
          imagemin.optipng({optimizationLevel: 5, interlaced: null})
        ],
        {
          silent: true
        }
      )
    )
    .pipe(dest('./dist/images'));
};

module.exports = images;