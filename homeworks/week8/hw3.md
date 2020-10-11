## 什麼是 Ajax？
Asynchronous JavaScript and XML 
透過javascript發出request到server的方法統稱

## 用 Ajax 與我們用表單送出資料的差別在哪？
送出表單瀏覽器收到response會自動render畫面


## JSONP 是什麼？
JSON with padding
利用<script>裡面可以放資料,透過指定的function把資料送回去server端
email已讀可用此方法實作

## 要如何存取跨網域的 API？
在response裡加 header：access-control-allow-origin


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為那是因為那是跨網域限制(保護)是瀏覽器給的,第四週不是用瀏覽器.
