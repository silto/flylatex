var path = require('path');

var config = {
  port: 3001
  , pdfs: {
    // absolute path of where to store compiled pdfs
    // defaults to "pdfs" directory in "flylatex" repo
    path: path.join(__dirname, "pdf_exports/")
  }
  , db : {
    url : "mongodb://127.0.0.1:27017/flydb",
    user_base_url : "mongodb://127.0.0.1:27017/user-auth"
  }, docs: {
    // maximum number of documents per user
    MAX_NUM_PER_USER : 100
  }, includes: {
    // absolute path of includes
    // defaults to "texpackages" directory in "flylatex" repo
    path : ""
  }
};


// export the configurations
module.exports = config;
