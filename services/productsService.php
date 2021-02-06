<?php
namespace Services;
class productsService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function get() {
        $queryProducts = 'SELECT
                            *
                          FROM
                            `tb_site.products`
                              LIMIT
                                10
        ';

        $datas = $this->classUserProductModel->selectAll($queryProducts, null);

        return $datas;
    }

    public function post() {
        $init = intval($_POST['init']);
        $end = intval($_POST['end']);

        $queryProducts = "SELECT
                            *
                          FROM
                          `tb_site.products`
                            LIMIT
                              $init,
                              $end
        ";

        $datas = $this->classUserProductModel->selectAll($queryProducts, null);

        return $datas;
    }
}
