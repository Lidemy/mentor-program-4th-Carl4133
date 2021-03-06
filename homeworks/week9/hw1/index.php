<?php
    session_start();
    require_once("conn.php");
    require_once("utils.php");


    $username = NULL;
    if(!empty($_SESSION['username'])) {
        $username = $_SESSION['username'];
    }
    
/*    
    if (!empty($_COOKIE['token'])) {
        $user = getUserFromToken($_COOKIE['token']);
        $username = $user['username'];
    }
*/
    $result = $conn->query("select * from carl_comments order by id desc");

    if (!$result) {
        die('Error:' . $conn->error);
    }


?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>留言板</title>
</head>
<body>
    <header class="warning">
        <strong>
        注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
        </strong>
    </header>
    <main class="board">
        <div>
            <?php 
                if (!$username) {
            ?>        
                    <a class="board__btn" href="register.php">註冊</a>
                    <a class="board__btn" href="login.php">登入</a>
                    
            <?php
                }
                else {
            ?>        
                    <a class="board__btn" href="handle_logout.php">登出</a>
                    <h3>你好！<?php echo $username ?></h3>
            <?php
                }
                
            ?> 
            
        </div>
        
        <h1 class="board__title">Comments</h1>
        <?php
            if(!empty($_GET['errCode'])) {
                $code = $_GET['errCode'];
                if ($code === '1') {
                    $msg = '資料不齊全';
                }elseif($code === '2') {
                    $msg = '帳號重複';
                }
                echo '<h2 class="error">' . $msg . '</h2>';
            }
        ?>
        <?php 
            if($username) {
        ?>
                <form class="board__new__comment__form" method="POST" action="handle_add_comment.php">                    
                    <textarea name="content" rows="5"></textarea>
                    <input class="board__submit__btn" type="submit" />
                </form>
                <div class="board__hr"></div>
                <section>
    
                <?php
                    while($row = $result->fetch_assoc()) {                
               
                ?>
    
                <div class="card">
                    <div class="card__avatar">
                    </div>
                    <div class="card__body">
                        <div class="card__info">
                            <span class="card__author"><?php echo $row['nickname']; ?></span>
                            <span class="card__time"><?php echo $row['created_at']; ?></span>
                        </div>
                        <p class="card__content"><?php echo $row['content']; ?></p>
                    </div>
                </div>
                <?php
                    }
                ?>    
                </section>        
        <?php
            }else {
        ?>
            <h3 class="error">請登入發佈留言</h3>
        <?php        
            }
        ?>

    </main>
    <script type="text/javascript"></script>
</body>
</html>