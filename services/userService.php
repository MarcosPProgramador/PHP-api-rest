<?php
namespace Services;
class userService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function put() {
        $_PUT = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT')) {
            parse_str(file_get_contents('php://input'), $_PUT);
        }

        $queryUserUpdate = 'UPDATE `tb_site.users` SET lastaction = ? WHERE token = ? AND email = ?';
        $queryUpdateUsersOnline = 'UPDATE `tb_admin.usersonline` SET lastaction = ? WHERE token = ? AND email = ?';
        $queryUpdateUsersToday = 'UPDATE `tb_admin.userstoday` SET lastaction = ? WHERE token = ? AND email = ?';
        $queryUpdateUsersVisited = 'UPDATE `tb_admin.usersvisited` SET lastaction = ? WHERE token = ? AND email = ?';

        $executeUserUpdate = [date('Y-m-d H:i:s'), $_COOKIE['token'], $_COOKIE['email']];

        $this->classUserProductModel->query($queryUserUpdate, $executeUserUpdate);
        $this->classUserProductModel->query($queryUpdateUsersOnline, $executeUserUpdate);
        $this->classUserProductModel->query($queryUpdateUsersToday, $executeUserUpdate);
        $this->classUserProductModel->query($queryUpdateUsersVisited, $executeUserUpdate);

        return 'aas';
    }

}
