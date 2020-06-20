## 跟你朋友介紹 Git
Git是一套版本管理程式。

單人使用：它可以幫助你紀錄檔案的歷程並可以快速地回到任一之前紀錄的檔案版本。

多人使用：可以同時協作同一份檔案，之後再結合。事後還可以知道哪一行是誰寫的、為什麼要修改。

### 單人使用：

安裝完Git

1. 在要檔案控管的資料夾CLI輸入`git init`(將資料夾加入git控管，執行一次就好)

2. 撰寫編輯檔案

3. 在CLI輸入`git add .`(加入追蹤，如果沒有新檔案可以省略)

4. 在CLI輸入`git commit -am '此版本備註'`(儲存一個版本)。可以回到第2步驟 

5. 在CLI輸入`git log`複製任一版本commit hash值，在輸入`git checkout hash`（回到該版本）。回第2步驟

### 多人協作

1. 在CLI輸入`git clone 遠端HTTP git檔案庫`（複製遠端最新檔案版本，執行一次就好）

2. 在CLI輸入：`git branch YYY`開一個新的分支YYY(一種備份,怎麼改都沒關係，為什麼要開分支，因為改壞了還要再下載檔案) 

3. 在CLI輸入：`git checkout YYY`切換到分支YYY 

～～～開始單人使用模式

～～～準備上傳

4. 在CLI輸入：`git checkout master`切回master

5. 在CLI輸入：`git merge YYY`將YYY分支的內容合併到本地master分支，

6. 在CLI輸入：`git branch -d YYY`刪掉YYY分支,刪不刪都可以,不過只剩感情，沒用了

7. 在CLI輸入：`git pull origin master`下載同步遠端不同處，也許同事改了什麼，可能會有衝突。

8. 在CLI輸入：`git push origin master`上傳自己本地版本到遠端，可能會有衝突，但是先執行步驟7,應該會少一些，回到步驟2



