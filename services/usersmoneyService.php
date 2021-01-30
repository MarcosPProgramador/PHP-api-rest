<?php
namespace Services;
class usersmoneyService {
    public function put() {
        $_PUT = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT')) {
            parse_str(file_get_contents('php://input'), $_PUT);
        }

        $connect = \tasks::ConnectDB();
        $queryS = $connect->prepare('SELECT `money` FROM `tb_site.users` WHERE `email` = ?');
        $queryS->execute([$_COOKIE['email']]);
        $value = $queryS->fetch(\PDO::FETCH_ASSOC);

        $queryU = $connect->prepare('UPDATE `tb_site.users` SET `money` = ? WHERE `email` = ?');
        $value = $value['money'] + $_PUT['value'];
        $queryU->execute([$value, $_COOKIE['email']]);

        return ['statusSuccess' => true, 'value' => $value];
    }

}
