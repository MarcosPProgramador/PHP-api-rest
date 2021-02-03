<?php
namespace Services;
class productcreatedService {
    public function get() {
        $connect = \tasks::ConnectDB();
        $query = $connect->prepare('SELECT * FROM `tb_site.user.createdproduct`');
        $query->execute();
        $datas = $query->fetchAll(\PDO::FETCH_ASSOC);

        return $datas;
    }
}