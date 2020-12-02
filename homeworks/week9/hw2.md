### 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
varchar:可變長度，可以設置最大長度；適合用在長度可變的屬性。 text:不設置長度， 當不知道屬性的最大長度時，適合用text。 查詢速度:varchar > text

from https://www.twblogs.net/a/5c126982bd9eee5e40bb4de6

### Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
cookie是一個小型文字檔案. 由於HTTP的無狀態性,要知道使用者做過什麼?(瀏覽器的狀態),要透過�Cookie來儲存 伺服器可以設定或讀取Cookies中包含資訊,藉此來維護用戶跟伺服器對談中的狀態。

#### 利用php 內建程式 session_start(); //將要使用內建session

$_SESSION['username'] = $username;   //設定session 當中有sessionID、username等等

if(!empty($_SESSION['username'])) {    //取得session的值
    $username = $_SESSION['username'];
}    
#### 自建session $token = generateToken(); //自己產生sessionID

$sql = sprintf("insert into tokens(token,username) values('%s', '%s')", //存到資料庫
    $token,
    $username    
    );
$result = $conn->query($sql);
if(!$result) {
        die($conn->error);
    }

setcookie("token",$token,$expire); //將sessionID存給client端cookie

if (!empty($_COOKIE['token'])) {    //取出cookie並去資料庫對身份
    $user = getUserFromToken($_COOKIE['token']);
    $username = $user['username'];
}
### 瀏覽器發送 request 給 server， 確認過資料後，Server 叫 browser 設置 cookie ，browser 把cookie 資料存在 cookie header 上，待下次登入，browser 帶上 cookie 發 request ，Server 根據 cookie 的內容，決定回傳狀態與內容

from https://zh.wikipedia.org/wiki/Cookie

我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1.密碼在資料庫是明碼 2.有 SQL injection 問題 （1=1) 3.沒有分頁功能,文章一多會不方便