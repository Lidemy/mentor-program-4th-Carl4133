<?php
    //內建session
    session_start();
    require_once('conn.php');
    require_once('utils.php');

    $expire = time() + 3600 * 24 * 30; // 30 day

    if ( 
        empty($_POST['username']) || 
        empty($_POST['password'])
    ) {
        header('Location: login.php?errCode=1');
        die('資料不齊全');
    }

    $username =  $_POST['username'];
    $password =  $_POST['password'];
    
    $sql = sprintf(
        "select * from carl_users where username='%s' and password= '%s' ",
        $username,
        $password
    );

    $result = $conn->query($sql);
    if(!$result) {        
        die($conn->error);
    }

    if ($result->num_rows) {
/*
        $token = generateToken();
        $sql = sprintf("insert into tokens(token,username) values('%s', '%s')",
        $token,
        $username    
        );
        
        $result = $conn->query($sql);
        if(!$result) {
            die($conn->error);
        }
        setcookie("token",$token,$expire);
*/
        $_SESSION['username'] = $username;

        header('Location: index.php');
    }else {
        header('Location: login.php?errCode=2');
    }

   


?>