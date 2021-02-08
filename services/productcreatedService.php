<?php
namespace Services;
class productcreatedService {
    public function get() {
        $connect = \tasks::ConnectDB();
        $query = $connect->prepare('SELECT id,name,price FROM `tb_site.user.createdproduct` WHERE token = ? GROUP BY name ORDER BY id ASC');
        $query->execute([$_COOKIE['token']]);
        $datas = $query->fetchAll(\PDO::FETCH_ASSOC);

        return $datas;
    }
    public function post()
    {
        $connect = \tasks::ConnectDB();
        $querySelect = $connect->prepare('SELECT product, price FROM `tb_site.products` WHERE id = ?');
        $querySelect->execute([$_POST['id']]);
        $datas = $querySelect->fetch(\PDO::FETCH_ASSOC);
        try {
            $query = $connect->prepare('INSERT INTO `tb_site.user.createdproduct` (name, token, email, price) VALUES (?,?,?,?)');

            $query->execute([$datas['product'], $_COOKIE['token'], $_COOKIE['email'], $datas['price']]);

            return 'success';
        } catch (\Throwable $th) {
            return 'error';
        }
    }
    public function delete() {
        $connect = \tasks::ConnectDB();

        $_DELETE = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE')) {
            parse_str(file_get_contents('php://input'), $_DELETE);
        }

        $query = $connect->prepare('DELETE FROM `tb_site.user.createdproduct` WHERE token = ? AND id = ?');
        $query->execute([$_COOKIE['token'], $_DELETE['productId']]);

        return [
            'DeletedId' => $_DELETE['productId'],
        ];
    }

}
