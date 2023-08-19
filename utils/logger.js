import chalk from 'chalk'

const logger = {
  info: (data) => console.log(chalk.green.bold(`data: ${data}`)),
  error: (error) => console.error(chalk.red.bold(`error: ${error.message}`)),
  err: (data) => console.error(chalk.red.bold(`err: ${data}`)),
  close: (code) => console.warn(chalk.green.bold(`child process exited with code ${code}`))
}

export default logger
