<?php
namespace Services;
class productsService {

    public function get() {
        $connect = \tasks::ConnectDB();
        $query = $connect->prepare('SELECT * FROM `tb_site.products` LIMIT 10');
        $query->execute();
        $datas = $query->fetchAll(\PDO::FETCH_ASSOC);

        return $datas;
    }

    public function post() {
        $init = intval($_POST['init']);
        $end = intval($_POST['end']);

        $connect = \tasks::ConnectDB();
        $query = $connect->prepare("SELECT * FROM `tb_site.products` LIMIT $init, $end");
        $query->execute();
        $datas = $query->fetchAll(\PDO::FETCH_ASSOC);

        return $datas;
    }
}
