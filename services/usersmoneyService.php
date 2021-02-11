<?php
namespace Services;
class usersmoneyService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function get() {
        $_PUT = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT')) {
            parse_str(file_get_contents('php://input'), $_PUT);
        }

        $queryUsers = 'SELECT
                        `money`
                      FROM
                        `tb_site.users`
                      WHERE
                        `email` = ?
                      AND
                        `token` = ?
        ';
        $executeUsers = [
            $_COOKIE['email'],
            $_COOKIE['token'],
        ];

        $data = $this->classUserProductModel->select($queryUsers, $executeUsers);

        return ['statusSuccess' => true, 'value' => $data['money']];
    }

    public function put() {
        $_PUT = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT')) {
            parse_str(file_get_contents('php://input'), $_PUT);
        }

        $queryUsers = 'SELECT
                        `money`
                      FROM
                        `tb_site.users`
                      WHERE
                        `email` = ?
                      AND
                        token = ?
        ';

        $executeUsers = [
            $_COOKIE['email'],
            $_COOKIE['token'],
        ];
        $data = $this->classUserProductModel->select($queryUsers, $executeUsers);

        $money = $data['money'] + 5000;

        $query = 'UPDATE
                    `tb_site.users`
                      SET
                        `money` = ?
                      WHERE
                        `email` = ?
                      AND
                        token = ?
        ';
        $execute = [
            $money,
            $_COOKIE['email'],
            $_COOKIE['token'],
        ];
        $this->classUserProductModel->query($query, $execute);

        return ['statusSuccess' => true, 'value' => $money];
    }

}
