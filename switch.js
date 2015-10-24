var config = require('./config.json')
var fs = require('fs');
var stream = fs.createWriteStream("./config.json");
var args = process.argv.slice(2);
if(!args[0]){
  console.log("node switch.js (local-test/test-server/product-server)");
}
stream.once('open', function(fd) {
  if(args[0] == 'local-test'){
    config.mode = 0;
    config.url = "http://127.0.0.1:63342";
  }
  else if(args[0] == 'test-server'){
    config.mode = 1;
    config.url = "http://nmg.vokou.com";
  }
  else if(args[0] == 'product-server'){
    config.mode = 2;
    config.url = "http://www.vokou.com, http://nmg.vokou.com";
  }
  stream.write(JSON.stringify(config));
  stream.end();
});
