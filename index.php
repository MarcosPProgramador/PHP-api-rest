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

    public static function Class ($class) {
        return new $class();
    }

}

\tasks::Class('\Controllers\controller');