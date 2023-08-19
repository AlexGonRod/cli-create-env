#!/usr/bin/env node
import { spawnSync } from 'child_process'
import logger from './logger.js'

function installation (...args) {
  console.log(args)
  return spawnSync(...args, {
    stdio: 'inherit'
  })
}

export function install (cmnd) {
  try {
    let result

    if (cmnd !== 'ohmy') {
      result = installation('brew', ['install', '--cask', `${cmnd}`], {
        stdio: 'inherit'
      })
    } else {
      result = installation('-c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"')
    }

    switch (result) {
      case result.error:
        logger.error(result.error.message)
        break
      case result.status:
        logger.err(result.status)
        break
      default:
        logger.info(JSON.stringify(result))
        break
    }
  } catch (err) {
    logger.error(err)
  }
}
