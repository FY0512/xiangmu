<?php
    $user = $_POST['username'];
    $pass = $_POST['password'];
    
    $con = mysqli_connect('localhost','root','123456','test');

    $sql = "SELECT * FROM `user` WHERE `username` = '$user'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    $row = mysqli_fetch_assoc($res);

    if($row){
        print_r('该用户名已经存在，请重新输入');
    }else{
        $sql1 = "INSERT INTO `user` VALUES(null,'$user','$pass')";
        $res1 = mysqli_query($con,$sql1);
        print_r(json_encode(array('code'=>'1'),JSON_UNESCAPED_UNICODE));
    }
?>