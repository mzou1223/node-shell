const pwd = require('./pwd');
const ls = require('./ls');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd == "pwd") {
    pwd();
  }
  else if (cmd == "ls") {
    ls();
  }
  process.stdout.write('\nprompt > ');
});
