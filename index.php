<?php
require './config.php';
class tasks {

    public static function ConnectDB() {
        return new \PDO(DBDRIVE . DBHOST . DBNAME, DBUSER, DBPASS);
    }

    public static function Endpoint() {
        $endpoint = $_GET['url'] ?? 'products';
        $endpoint = strtolower($endpoint);
        $arr = explode('/', $endpoint);

        if (!array_pop($arr)) {
            $endpoint = implode('/', $arr);
            return "/$endpoint";
        };
        return "/$endpoint";

    }

    public static function Token() {

        if (!isset($_COOKIE['token'])) {
            $token = uniqid();
            setcookie('token', $token, time() + 20, '/');
            $connect = self::ConnectDB();
            try {
              $queryUser = $connect->prepare('UPDATE `tb_site.users` SET token = ? WHERE email = ?');
              $query = $connect->prepare('UPDATE `tb_site.user.createdproduct` SET token = ? WHERE email = ?');

              $query->execute([$token, $_COOKIE['email']]);
              $queryUser->execute([$token, $_COOKIE['email']]);
            } catch (\Throwable $th) {
              die('Bad request');
            }

        }

    }

    public static function Class ($class) {
        return new $class();
    }

}

\tasks::Token();
\tasks::Class('\Controllers\controller');