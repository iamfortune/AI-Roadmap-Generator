const { request } = require('undici')

async function callGHEndpoint ({ path, method, body, accessToken }) {
    const res = await request(`https://api.github.com/${path}`, {
      method: method.toUpperCase(),
      headers: {
        authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'A Platformatic App'
      }
    })
  
    return await res.body.json()
  }
  
  module.exports = {
    callGHEndpoint
  }