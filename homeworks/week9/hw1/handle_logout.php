<?php
    session_start();
    session_destroy();

/*
    require_once('conn.php');
    
    $token = $_COOKIE['token'];
    $sql = sprintf("delete from tokens where token = '%s'",
        $token    
    );

    $conn->query($sql);

    setcookie("username","",time()-3600);
*/
    header('Location: index.php');
?>