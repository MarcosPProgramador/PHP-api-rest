<?php
namespace Services;
class productnameService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function get() {
        $queryProductNameSelect = 'SELECT
                                          product,
                                          brand_id
                                        FROM
                                          `tb_site.productname`
        ';
        $executeProductNameSelect = null;

        $datas = $this->classUserProductModel->selectAll($queryProductNameSelect, $executeProductNameSelect);

        return $datas;
    }
}