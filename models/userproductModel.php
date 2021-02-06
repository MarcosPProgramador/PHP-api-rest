<?php
namespace Models;
class userproductModel {

    public function __construct() {
        $this->connect = \tasks::ConnectDB();
    }

    public function query($query, $executeArr) {

        $query = $this->connect->prepare($query);
        $query->execute($executeArr);
    }

    public function select($query, $executeArr) {

        $querySelect = $this->connect->prepare($query);
        $querySelect->execute($executeArr);
        $datas = $querySelect->fetch(\PDO::FETCH_ASSOC);

        return $datas;
    }

    public function selectAll($query, $executeArr) {

        $querySelect = $this->connect->prepare($query);
        $querySelect->execute($executeArr);
        $datas = $querySelect->fetchAll(\PDO::FETCH_ASSOC);

        return $datas;
    }

}
