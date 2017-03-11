import xhr from 'xhr'
import { resolve } from 'url'

const API_URL = process.env.API_URL

// Default headers
const headers = {
  'Content-Type': 'application/vnd.api+json'
}

export function getStatus (callback) {
  let url = resolve(API_URL, 'api/door')

  return xhr.get({ url, headers, json: true }, (error, response, body) => {
    if (error || response.statusCode >= 400) {
      return callback({
        error: true,
        status: 'unknown',
        message: 'Unable to retrieve garage status'
      })
    }

    callback({ error: false, message: null, ...body.data.attributes })
  })
}

export function postCommand (command, callback) {
  let url = resolve(API_URL, 'api/door_commands')

  let body = {
    data: {
      type: 'doorCommands',
      attributes: { command }
    }
  }

  return xhr.post({ url, headers, body, json: true }, (error, response, body) => {
    if (error || response.statusCode >= 400) {
      return callback({
        error: true,
        message: `Unable to send command "${command}."`
      })
    }

    callback({ error: false, message: null })
  })
}
