module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `css/` to `_site/css`
  eleventyConfig.addPassthroughCopy("css");

  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy({"images": "images"});

  // Use a duplicate of site-wide assets for standalone viewing in development
  if (process.env.NODE_ENV != 'production') {
    // Copy `css/` to `_site/css`, merge with blog css
    eleventyConfig.addPassthroughCopy({"root/css": "css"});

    // Copy `js/` to `_site/js`
    eleventyConfig.addPassthroughCopy({"root/js": "js"});

    // Copy `images/` to `_site/images`, merge with blog images
    eleventyConfig.addPassthroughCopy({"root/images": "images"});

    // Copy `fonts/` to `_site/fonts`
    eleventyConfig.addPassthroughCopy({"root/fonts": "fonts"});
  }

  // Define a human readable date format
  eleventyConfig.addFilter("readableDate", date => {
    var year = date.getFullYear();
    var month = (('0' + (date.getMonth()+1))).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    var datestamp = `${year}-${month}-${day}`;
    return datestamp;
  });
};