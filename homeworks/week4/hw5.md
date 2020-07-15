## 請以自己的話解釋 API 是什麼
API簡單來說就是交換訊息的指令集(方法、介面)，可以分為OS-API、非OS-API。藉由API，clint端可以不管server端如何設計，專注於API組合的應用，進而達到想要的功能。 


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
401: Unauthorized: 因為request中没有包含Authorization header ;403是有含Authorization header，但是沒有權限。

408: Request Timeout: 發生原因1.clint的網速太慢2.server要處理的clint太多。 （開發金流的要多注意）

429： Too Many Requests: server端認為你在一定時間內發出太多request，認定你是攻擊了,晚點再試看看。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://lidemy-book-store.herokuapp.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 回傳所有餐廳 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurant?_limit=5 |
| 回傳單一餐廳 | GET    | /restaurants/:recNo | 無                    | /books/10      |
| 新增餐廳   | POST   | /restaurants     | name: 餐廳名 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:recNo     | 無 | 無              |
| 更改餐廳名   | PATCH   | /restaurants/:recNo    | name: 餐廳名 | 無              |