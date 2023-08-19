#!/usr/bin/env node
import inquirer from 'inquirer'
import { terminalQuestions } from './utils/questions.js'
import logger from './utils/logger.js'
import { install } from './utils/install.js'

(() => {
  try {
    inquirer.prompt(terminalQuestions).then((answers) => {
      for (const value in answers) {
        if (value === 'ohmy') {
          install(value)
        } else {
          install(answers[value])
        }
      }
    })
  } catch (error) {
    logger.error('Got this error when executing installation: ', error.message)
  }
})()
