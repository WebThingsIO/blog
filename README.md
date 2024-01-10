# WebThings Blog

This is the source code of the WebThings Blog, hosted at https://webthings.io/blog.


## Local Editing

To run a local copy of the blog. 

- Check out this repository
- Change into the blog directory
- Install dependencies:

`$ npm ci`

To start up a local hot-loading local web server:

`$ npx @11ty/eleventy --serve`

Open http://localhost:8080/ to view the local copy of the blog.

**⚠️ Warning:** Site-wide assets from webthings.io (css, js, images and fonts) are duplicated in the `root/` directory in this repo for the purposes of viewing the blog standalone during development, but the real root assets are used in production. Any updates to the site-wide assets need to be synchronised between this repo and the [main site repo](https://github.com/WebThingsIO/webthingsio.github.io/).