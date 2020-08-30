/* eslint-disable eol-last */
/* eslint-disable indent */
// eslint-disable-next-line consistent-return
function closest(node, className) {
    while (node && node.classList) {
        if (node.classList.contains(className)) {
            return node;
        }
        // eslint-disable-next-line no-param-reassign
        node = node.parentNode;
    }
}
// 如果考慮ie或不支援的瀏覽器
// function closestRecursive(node, className) {
//     if (!node || !node.classList) return null;
//     if (node.classList.contains(className)) {
//         return node;
//     }
//     return closestRecursive(node.parentNode, className);
// }

document.querySelector('.accordion').addEventListener('click', (e) => {
    // const element = e.target.closest('.accordion__item');
    const element = closest(e.target, 'accordion__item');
    if (element) {
        element.classList.toggle('accordion__content__hide');
    }
    // closest() 離點擊的 祖先最近的calss
});