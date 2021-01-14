<?php
namespace Models;

class serviceApiModel {

    public static function select(int $id = null, $query) {
        $connect = \tasks::ConnectDB();

        $getUser = $connect->prepare($query);
        $getUser->execute([$id]);

        if ($getUser->rowCount()) {
            return $getUser->fetch(\PDO::FETCH_ASSOC);
        } else {
            return ['statusError' => true];
        }

    }

    public static function selectAll($query) {
        $connect = \tasks::ConnectDB();

        $getUsers = $connect->prepare($query);
        $getUsers->execute();

        if ($getUsers->rowCount()) {
            return $getUsers->fetchAll(\PDO::FETCH_ASSOC);
        } else {
            return ['statusError' => true];
        }

    }

    public static function delete(int $id = null, $query) {
        $connect = \tasks::ConnectDB();

        $getUser = $connect->prepare($query);
        $getUser->execute([$id]);

        if ($getUser->rowCount()) {
            return ['statusError' => false];
        } else {
            return ['statusError' => true];
        }

    }

    public static function update($query, $arr) {
        $connect = \tasks::ConnectDB();

        $getUser = $connect->prepare($query);
        $getUser->execute($arr);

        if ($getUser->rowCount()) {
            return ['statusError' => false];
        } else {
            return ['statusError' => true];
        }

    }

}
