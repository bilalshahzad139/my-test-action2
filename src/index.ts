import * as core from '@actions/core'

async function run() { 
  core.info('testing-run')
}
(async () => {
    try {
      await run()
    } catch (error) {
      core.info(`[warning]${error.stack}`)
      core.info(`Payload: ${JSON.stringify(error)}`)
      process.exitCode = 1
    }
  })()