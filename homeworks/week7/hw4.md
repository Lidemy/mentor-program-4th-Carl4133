## 什麼是 DOM？
Document Object Model文件物件模型（瀏覽器限定）
讓瀏覽器的JavaScript可以用樹狀節點物件的方式,存取或操控HTMＬ標籤的內容及屬性

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
1.先捕獲，再冒泡;當事件傳到 target 本身，沒有分捕獲跟冒泡(根據你addEventListener的順序而定)

捕獲是從window到target
冒泡是從target到window  (target部分不分)
addEventListener第三個Boolean參數 True:捕獲，False:冒泡(預設)

## 什麼是 event delegation，為什麼我們需要它？
將eventListener加在DOM的parentNode，因為事件傳遞機制所以會觸發，再利用過濾class找到設計好的target，做出想要的功能。
1.只需要加在parentNode,只需要一個eventListener
2.loaded後才出現的Node必須用event delegation才能促發，因為一開始沒有此物件。
## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()：停止物件預設功能
event.stopPropagation()：停止事件傳遞(就到這一層)

example: 在div中有一<a>設有event.preventDefault()，在click<a>時不會促發超連結,但是div會有事件傳遞。