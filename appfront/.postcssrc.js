// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {
        resolve: function(id, basedir, importOptions){
          if(id(0) == '~'){
            return path.join(__dirname, 'node_modules', id.substr(1));
          }
        }
    },
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
