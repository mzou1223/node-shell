const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');

process.stdin.on('data', async (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd == "ls") {
    ls();
  }else if (cmd == "pwd") {
    pwd();
  }
  setTimeout(function() {
    process.stdout.write('\nprompt > ');
  }, 200);
});
