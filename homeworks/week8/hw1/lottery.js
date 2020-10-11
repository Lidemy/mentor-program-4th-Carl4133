/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-alert */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable func-names */

function chaengeView(file) {
    const banner = document.querySelector('.banner');
    if (file === 'black') {
        banner.style.background = 'black';
    } else {
        banner.style.background = `url(${file}.jpg) center/cover no-repeat`;
    }
}

function resultObj(result) {
    const banner = document.querySelector('.banner');
    banner.innerHTML = `<h2>${result}</h2> <div class="lottery__result__dropbtn">我要抽獎</div>`;
}

const btn = document.querySelector('.banner');
btn.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('lottery__dropbtn') || target.classList.contains('lottery__result__dropbtn')) {
        const request = new XMLHttpRequest();
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // if (request.responseText["prize"])
                const response = request.responseText;
                const resJSON = JSON.parse(response);
                const removeTag = document.querySelector('.lottery__box');
                if (removeTag != null && resJSON.prize != null) {
                    removeTag.remove();
                }

                if (resJSON.prize === 'FIRST') {
                    chaengeView('flight');

                    resultObj('恭喜你中頭獎了！日本東京來回雙人遊！');
                } else if (resJSON.prize === 'SECOND') {
                    chaengeView('tv');
                    // removeTag.remove();
                    resultObj('二獎！90 吋電視一台！');
                } else if (resJSON.prize === 'THIRD') {
                    chaengeView('youtube');
                    // removeTag.remove();
                    resultObj('恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！');
                } else if (resJSON.prize === 'NONE') {
                    chaengeView('black');
                    // removeTag.remove();
                    resultObj('銘謝惠顧');
                } else {
                    alert('系統不穩定，請再試一次');
                }
            } else {
                alert('系統不穩定，請再試一次');
            }
        };

        request.onerror = function() {
            alert('系統不穩定，請再試一次');
        };

        request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
        request.send();
    }
});