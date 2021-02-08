<?php
namespace Services;
class productbrandService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function post() {
        $brandId = $_POST['brand_id'];
        $queryProductBrandSelect = 'SELECT
                                          id,
                                          brand,
                                          product_id
                                        FROM
                                          `tb_site.productbrand`
                                        WHERE product_id = ?
        ';
        $executeProductBrandSelect = [$brandId];

        $datas = $this->classUserProductModel->selectAll($queryProductBrandSelect, $executeProductBrandSelect);

        return $datas;
    }
}