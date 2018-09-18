const pwd = require('./pwd')
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => { //'on' is the listener 
  const cmd = data.toString().trim(); //removes the newLine (enter)
  process.stdout.write('You typed: ' + cmd)
  pwd(cmd)
  process.stdout.write('\nprompt > ')


});