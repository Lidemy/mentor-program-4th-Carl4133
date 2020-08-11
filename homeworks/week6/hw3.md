## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<del>劃掉</del>:劃掉

<ins>底線</ins>:底線

 <fieldset>
  <legend>Personalia:</legend>
 </fieldset>
fieldset: form表單匡線
legend:form表單匡線標題

原文網址：https://www.w3schools.com/html/default.asp



## 請問什麼是盒模型（box modal）
CSS盒模型主要用來設計和布局。HTML文檔中的每個元素都有盒子模型，盒模型規定了元素處理元素內容（content）、內邊距（padding）、邊框（border）和外邊距（margin）的方式。
![](https://i2.kknews.cc/SIG=3ndvdb3/471p000015s50o47op23.jpg)

原文網址：https://kknews.cc/code/e4xamqq.html

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
block:一列一物件(預設)

inline:標籤裡面要有內容，不然不顯示，類似span，寬高無用，左右margin有用，padding有用

inline-block:可並排，margin、padding、width、heigh可調; 小心中間空格會造成類似margin的一格

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
fixed:固定在某viewport(固定瀏覽器畫面位置)

static:順序排序放置(預設)

relative:以static位置為基準，利用top or bottom or left or right做移動

absolute:往父元素往上找第一個非static位置為基準，利用top or bottom or left or right做移動