module.exports = {
  port: 4000,

  tasks: {
    imagemin:   false,
    css:       true,
    server:     true,
    webpack:    true,
  },

  paths: {
    dest:      "_site",
    posts:     "_posts",
    assets:    "./assets",
    css:       "css",
    js:        "js",
    images:    "images",
    postcss:      "_postcss",
    jsSrc:     "_js",
    imagesSrc: "_images",
  },

  jekyll: {
    config: {
      default:     "_config.yml",
      development: "_config_development.yml",
      production:  "",
    }
  },

  js: {
    entry: [
      "main.js",
    ],
  },
}
