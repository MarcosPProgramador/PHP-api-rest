<?php
namespace Services;
class productService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
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

        if (!count($datas)) {
            return false;
        }

        return $datas;

    }

}
