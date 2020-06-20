## 交作業流程

（先前已git clone 到 local 電腦)
1. 新開一個 branch YYY：`git branch YYY` 

2. 切換到 branch YYY：`git checkout YYY`

3. 寫作業：`open XXX.md` (要先`cd 檔案目錄`轉到要寫的檔案目錄,寫完存擋！)

4. 將檔案加入版本控管：`git add ZZZ` (如果是新增的檔案才要做) 

5. 提交一個版本：`git commit -am "XXXX 完成"` （""內是commit message）

6. 將現在分支內容推到遠端gitHub:`git push origin YYY` (若遠端沒有YYY分支會自動建立)

7. 發出pull request:
    1.到gitHub按 `Compare & pull request` or `New pull request`(準備 git merge)
    2.確認檔案更動符合預期,按`Create pull request`

8. 到learning.lidemy>作業列表>新增作業>第Ｘ週>將有pull的連結(PR)貼上>勾勾>送出  


～～～改完作業 (merged)

9. 切換到 branch master：`git checkout master`

10. 將gitHub上master同步下來：`git pull origin master`

