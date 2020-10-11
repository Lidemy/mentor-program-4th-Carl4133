/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
// <div class="stream-empty"></div>
// 取得分類
const request = new XMLHttpRequest();
request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true);
request.setRequestHeader('Client-ID', 'tggb4ynwpzw8zh2eod82o1j6lmyvwd');
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        console.log(this.response);
        const games = JSON.parse(this.response).top;
        for (const game of games) {
            const element = document.createElement('li');
            element.innerText = game.game.name;
            document.querySelector('.navbar__nav').appendChild(element);
        }

        // 顯示第一個遊戲的實況名稱
        document.querySelector('h1').innerText = games[0].game.name;

        // 抓取第一個遊戲的實況內容
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://api.twitch.tv/kraken/streams?game=${encodeURIComponent(games[0].game.name)}`, true);
        request2.setRequestHeader('Client-ID', 'tggb4ynwpzw8zh2eod82o1j6lmyvwd');
        request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
        request2.onload = function() {
            if (request2.status >= 200 && request2.status < 400) {
                const data = JSON.parse(request2.response).streams;
                for (const stream of data) {
                    const element = document.createElement('div');
                    document.querySelector('.streams').appendChild(element);
                    element.outerHTML = `<div class="stream">
    <img src="${stream.preview.large}" />
    <div class="stream__data">
        <div class="stream__avatar">
            <img src="${stream.channel.logo}">
        </div>
        <div class="stream__intro">
            <div class="stream__title">${stream.channel.status}</div>
            <div class="stream__channel">
                ${stream.channel.name}
            </div>
        </div>
    </div>
  </div>`;
                }
            }
        };
        request2.send();
    }
};
request.send();

document.querySelector('.navbar__nav').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
        const gameName = e.target.innerText;
        document.querySelector('h1').innerText = gameName;
        document.querySelector('.streams').innerHTML = '';
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://api.twitch.tv/kraken/streams?game=${encodeURIComponent(gameName)}`, true);
        request2.setRequestHeader('Client-ID', 'tggb4ynwpzw8zh2eod82o1j6lmyvwd');
        request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
        request2.onload = function() {
            if (request2.status >= 200 && request2.status < 400) {
                const data = JSON.parse(request2.response).streams;
                for (const stream of data) {
                    const element = document.createElement('div');
                    document.querySelector('.streams').appendChild(element);
                    element.outerHTML = `<div class="stream">
    <img src="${stream.preview.large}" />
    <div class="stream__data">
        <div class="stream__avatar">
            <img src="${stream.channel.logo}">
        </div>
        <div class="stream__intro">
            <div class="stream__title">${stream.channel.status}</div>
            <div class="stream__channel">
                ${stream.channel.name}
            </div>
        </div>
    </div>
  </div>`;
                }
            }
        };
        request2.send();
    }
});