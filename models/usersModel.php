<?php
namespace Models;

class usersModel {

    public static function getUser(int $id = null) {
        $connect = \tasks::ConnectDB();

        $getUser = $connect->prepare('SELECT * FROM users WHERE id = ?');
        $getUser->execute([$id]);

        if ($getUser->rowCount()) {
            return $getUser->fetch(\PDO::FETCH_ASSOC);
        } else {
            throw new \Exception(':(');
        }

    }

    public static function getUsers() {
        $connect = \tasks::ConnectDB();

        $getUsers = $connect->prepare('SELECT * FROM users');
        $getUsers->execute();

        if ($getUsers->rowCount()) {
            return $getUsers->fetchAll(\PDO::FETCH_ASSOC);
        } else {
            throw new \Exception(':(');
        }

    }

    public static function setUser() {
        $connect = \tasks::ConnectDB();
        try {
            $setUsers = $connect->prepare("INSERT INTO users (name, email, token) VALUES ('pedro', 'pedroales@gmail.com','ss4564sd4fe')");
            $setUsers->execute();

            $getUsers = $connect->prepare('SELECT * FROM users');
            $getUsers->execute();

            if ($getUsers->rowCount()) {
                return $getUsers->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception(':(');
            }

        } catch (\Throwable $th) {
            throw new \Exception(':(');
        }

    }

    public static function deleteUser(int $id) {
        $connect = \tasks::ConnectDB();

        $deleteUser = $connect->prepare("DELETE FROM users WHERE id = ?");
        $deleteUser->execute([$id]);

        $getUsers = $connect->prepare("SELECT * FROM users");
        $getUsers->execute();

        if ($getUsers->rowCount()) {
            return $getUsers->fetchAll(\PDO::FETCH_ASSOC);
        } else {
            throw new \Exception(':(');
        }

    }

    public static function updateUser(int $id) {
        $connect = \tasks::ConnectDB();

        $updateUser = $connect->prepare("UPDATE users SET name = 'marcos'  WHERE id = ?");
        $updateUser->execute([$id]);

        $getUsers = $connect->prepare("SELECT * FROM users");
        $getUsers->execute();

        if ($getUsers->rowCount()) {
            return $getUsers->fetchAll(\PDO::FETCH_ASSOC);
        } else {
            throw new \Exception(':(');
        }

    }

}
