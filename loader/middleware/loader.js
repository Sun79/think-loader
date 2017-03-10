const path = require('path');
const helper = require('think-helper');
const interopRequire = require('../util.js').interopRequire;
const loadMiddlewareFiles = require('./load_files');
const parseMiddleware = require('./parse');


function loader(appPath, thinkPath, modules, app){
  let filepath = '';
  if(modules.length){
    filepath = path.join(appPath, 'common/config/middleware.js');
  }else{
    filepath = path.join(appPath, 'config/middleware.js');
  }
  if(!helper.isFile(filepath)){
    return [];
  }
  const middlewares = interopRequire(filepath);
  return parseMiddleware(middlewares, loadMiddlewareFiles(appPath, modules.length, thinkPath), app);
}

module.exports = loader;