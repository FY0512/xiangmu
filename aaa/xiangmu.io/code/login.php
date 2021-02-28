<?php
    $user = $_POST['username'];
    $pass = $_POST['password'];
    
    $con = mysqli_connect('localhost','root','123456','test');

    $sql = "SELECT * FROM `user` WHERE `username` = '$user' AND `password`= '$pass'" ;

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    $row = mysqli_fetch_assoc($res);

    if($row){
        print_r(json_encode(array('code'=>'2'),JSON_UNESCAPED_UNICODE));
    }


?>