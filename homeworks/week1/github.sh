curl -s https://api.github.com/users/$1 | grep -w name | cut -d : -f 2 | sed 's/",//g' | sed 's/"//g'
curl -s https://api.github.com/users/$1 | grep -w bio | cut -d : -f 2 | sed 's/",//g' | sed 's/"//g'
curl -s https://api.github.com/users/$1 | grep -w location | cut -d : -f 2 | sed 's/",//g' | sed 's/"//g'
curl -s https://api.github.com/users/$1 | grep -w blog | sed 's/",//g'| sed 's/ "blog"://g' | sed 's/ "//g'


#參考ulahsieh同學的
#其他同學有用到存檔刪檔,只call一次API比較快,但是這個比較直觀,我喜歡！

#curl url :送出request
#<command-a> | <command-b> :命令a執行的輸出給執行命令b當輸入
#$1:第一個參數
#grep -w <字串>:擷取含有<字串>的那一行 -w：<字串>長度大小寫都要一致
#cut -d : -f 2 :cut字串擷取 -d:利用分隔字元來切這裡是":"  2：第二個
#sed: 行的工具.  s:替換.  /<字串a>/<字串b>/:遇到<字串a>用<字串b>替換.  g:global 不加只會換一行的第一個
 
#awk: 處理一行的指令 awk 'NR==1' 第一行 
