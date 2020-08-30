/* eslint-disable no-useless-return */
/* eslint-disable eol-last */
/* eslint-disable indent */
// 跳脫函式 讓特定符號 不要被瀏覽器 視為標籤;與安全性相關
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

document.querySelector('.btn__new').addEventListener('click', () => {
    // 取value寫法
    const { value } = document.querySelector('.input__todo');
    console.log(value);
    if (!value) return;
    const div = document.createElement('div');
    div.classList.add('todo');
    div.innerHTML = `<input type="checkbox" class="todo__check"/>
    <div class="todo__title">${escapeHtml(value)}</div>
    <button class="btn__delete">刪除</button>`;
    // 注意 appendChild兩次是 移動
    document.querySelector('.todos').appendChild(div);

    document.querySelector('.input__todo').value = '';
});


document.querySelector('.todos').addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('btn__delete')) {
        target.parentNode.remove();
        return;
    }

    // 加在todo
    if (target.classList.contains('todo__check')) {
        if (target.checked) {
            target.parentNode.classList.add('done');
        } else {
            target.parentNode.classList.remove('done');
        }
    }
});