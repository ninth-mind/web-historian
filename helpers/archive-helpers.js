var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

var lineNumber = 0;

exports.readListOfUrls = function(){
  var listPath = exports.paths.list;
  var list = "";
  debugger;
  fs.readFile(listPath, function(err, data){
    if(err){
      console.log(err)
    }
    list = data;
  })
  return list;
};

exports.isUrlInList = function(url){
  var list = exports.readListOfUrls()
  if(list.indexOf(url) > -1){
    return true;
  }
  return false;
};

exports.addUrlToList = function(url){
  url = "/n" + url;
  fs.appendFile(exports.paths.list, url, function(err){
    if(err){
      console.log(err)
      throw err;
    }
  })
  
};

exports.isUrlArchived = function(url){
  var folderPath = exports.paths.archivedSites + url;
  fs.exists(folderPath, function(exists){
    exists ? true : false;
  })

};

exports.downloadUrls = function(){
  var file = exports.paths.list;
  fs.readFile(file, function(err, data){
    if(err){
      console.log ("THIS IS THE ERROR : " + err);
      throw err
    }else{
      var urlArray = data.split("/n");
      for(var i = 0; i < urlArray.length; i++){
        if(!isUrlArchived(urlArray[i])){
          //scrape the site
          debugger;
        }
      }
    }

  })

};
