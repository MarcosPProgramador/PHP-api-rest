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
            setcookie('token', $token, time() + 43200, '/');
            $connect = self::ConnectDB();
            try {
                $queryUser = $connect->prepare('UPDATE `tb_site.users` SET token = ? WHERE email = ?');
                $queryCreatedProduct = $connect->prepare('UPDATE `tb_site.user.createdproduct` SET token = ? WHERE email = ?');
                $queryPurchasedProduct = $connect->prepare('UPDATE `tb_site.user.purchasedproduct` SET token = ? WHERE email = ?');
                $queryFavoritesProduct = $connect->prepare('UPDATE `tb_site.user.favoritesproduct` SET token = ? WHERE email = ?');
                $queryUsersOnline = $connect->prepare('UPDATE `tb_admin.usersonline` SET token = ? WHERE email = ?');
                $queryUsersToday = $connect->prepare('UPDATE `tb_admin.userstoday` SET token = ? WHERE email = ?');
                $queryUsersVisited = $connect->prepare('UPDATE `tb_admin.usersvisited` SET token = ? WHERE email = ?');

                $executeArr = [$token, $_COOKIE['email']];

                $queryCreatedProduct->execute($executeArr);
                $queryPurchasedProduct->execute($executeArr);
                $queryFavoritesProduct->execute($executeArr);
                $queryUsersOnline->execute($executeArr);
                $queryUsersToday->execute($executeArr);
                $queryUsersVisited->execute($executeArr);
                $queryUser->execute($executeArr);
                
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

// INSERT INTO `tb_site.user.createdproduct` (`name`, `token`, `email`, `price`) VALUES

// ('Galaxy A1', '601ac7a46bd16', 'marcosproenca144@gmail.com', '1200.89'),

// ('Galaxy A2', '601ac7a46bd16', 'marcosproenca144@gmail.com', '2200.59'),

// ('Galaxy A3', '601ac7a46bd16', 'marcosproenca144@gmail.com', '3200.29'),

// ('Galaxy A4', '601ac7a46bd16', 'marcosproenca144@gmail.com', '4200.19'),

// ('Galaxy A5', '601ac7a46bd16', 'marcosproenca144@gmail.com', '5200.99'),

// ('Galaxy A6', '601ac7a46bd16', 'marcosproenca144@gmail.com', '6200.19'),

// ('Galaxy A7', '601ac7a46bd16', 'marcosproenca144@gmail.com', '7200.39'),

// ('Galaxy A8', '601ac7a46bd16', 'marcosproenca144@gmail.com', '7500.49'),

// ('Galaxy A9', '601ac7a46bd16', 'marcosproenca144@gmail.com', '6400.59'),

// ('Galaxy A10', '601ac7a46bd16', 'marcosproenca144@gmail.com', '4200.79'),

// ('Galaxy A11', '601ac7a46bd16', 'marcosproenca144@gmail.com', '5100.89'),

// ('Galaxy A12', '601ac7a46bd16', 'marcosproenca144@gmail.com', '7200.49'),

// ('Galaxy A13', '601ac7a46bd16', 'marcosproenca144@gmail.com', '6300.19'),

// ('Galaxy A14', '601ac7a46bd16', 'marcosproenca144@gmail.com', '2400.59'),

// ('Galaxy A15', '601ac7a46bd16', 'marcosproenca144@gmail.com', '7400.29'),

// ('Galaxy A16', '601ac7a46bd16', 'marcosproenca144@gmail.com', '8900.39'),

// ('Galaxy A17', '601ac7a46bd16', 'marcosproenca144@gmail.com', '7800.59'),

// ('Galaxy A18', '601ac7a46bd16', 'marcosproenca144@gmail.com', '6500.89'),

// ('Galaxy A19', '601ac7a46bd16', 'marcosproenca144@gmail.com', '8700.99');
// ('Galaxy A20', '601ac7a46bd16', 'marcosproenca144@gmail.com', '9800.49');
