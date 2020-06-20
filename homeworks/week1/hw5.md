## 請解釋後端與前端的差異。
以一個動態網頁來看(靜態網頁沒後端),前端利用 HTML、CSS、JS 提供使用者利用瀏覽器介面發出request.後端接收request利用程式語言(ex:PHP)從資料庫尋找資料，處理資料，最後response給前端。前後端的橋樑就是Application Programming Interface(API)，交換的格式有:JSON、XML。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. `瀏覽器`要`作業系統`送出要求(request) 
2. `作業系統`要`網路卡`送出要求  
3.  `網路卡`要`網路設備`送出要求  (很多設備依序可能有Hub,router,firewall,DNS server....)
4. `網路設備(DNS)`將要求導到實體IP的`Google Server`
5. `Google Server`利用他的搜索引擎到`資料庫`尋找結果
6. 搜尋到的結果(response)走原路回到瀏覽器然後顯示


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `sudo`取得root的權限(最高)來執行指令
    
    ex: `sudo -u /usr/local/protected` 查看一般使者無法讀取的目錄

    ex: `sudo -u www vim ~www/htdocs/index.html`使用系統帳號權限編輯網頁檔案

2. `cp`複製檔案至目錄

    ex: `cp test.js test2.js` 在同一資料夾用test複製出一份test2

    ex: `cp test.js /temp` 複製一份test到temp資料夾

3. `[command-a]; [command-b]`不論命令a是否執行成功，執行完命令a後再執行命令b 
   `[command-a] && [command-b]`如果命令a執行成功就執行命令b
   `[command-a] || [command-b]`如果命令a執行失敗就執行命令b
   `[command-a] &`在背景執行命令a