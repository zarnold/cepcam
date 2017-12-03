const  serverConfig = require('../config/server.js');

const dbPass = serverConfig.dbPwd;

console.log(serverConfig);

module.exports = {
      'url' : 'http://cepcam:' + dbPass + '@localhost:27017/cepcam'
};
