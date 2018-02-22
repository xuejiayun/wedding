<?php
/**
 * Created by IntelliJ IDEA.
 * User: xue
 * Date: 2018/2/22/0022
 * Time: 20:53
 */
    $jsonStr = file_get_contents("./data.json");
    $totalArr = json_decode($jsonStr);
    $randomKeys = array_rand($totalArr,10);
    $newArr =array();
    for($i=0;$i<count($randomKeys);$i++){
        $key = $randomKeys[$i];
        $obj = $totalArr[$key];
        $newArr[$i] = $obj;
    }
    echo json_encode($newArr);
