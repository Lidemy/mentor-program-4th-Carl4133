const request = require('request');

request({
  method: 'GET',
  url: 'https://api.twitch.tv/kraken/games/top?limit=100',
  headers: {
    'Client-ID': 'tggb4ynwpzw8zh2eod82o1j6lmyvwd',
    Accept: 'application/vnd.twitchtv.v5+json',
  },
},
(error, response, body) => {
  const jsonBody = JSON.parse(body);
  for (let i = 0; i < jsonBody.top.length; i += 1) {
    console.log(`${jsonBody.top[i].viewers} ${jsonBody.top[i].game.name}`);
  }
});
