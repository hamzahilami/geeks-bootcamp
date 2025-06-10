const chalk = require('chalk');

function colorfulMessage() {
  const message = chalk.bold.green('Hello, ') + chalk.red('World') + chalk.bold.blue('! This is a colorful message.');
  console.log(message);
}

module.exports = colorfulMessage;