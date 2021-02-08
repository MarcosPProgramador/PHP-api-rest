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

        if (!isset($_POST['insert'])) {
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

        } else {
            $productName = $_POST['productName'];
            $productBrand = $_POST['productBrand'];
            $productPrice = $_POST['productPrice'];

            $queryProductsBrand = "SELECT
                                    *
                                  FROM
                                    `tb_site.productbrand`
                                  WHERE
                                    id = ?

            ";
            $queryProductsName = "SELECT
                                    *
                                  FROM
                                    `tb_site.productname`
                                  WHERE
                                    brand_id = ?

            ";
            $executeProductsBrand = [$productBrand];
            $executeProductsName = [$productName];

            $datasProductBrand = $this->classUserProductModel->select($queryProductsBrand, $executeProductsBrand);
            $datasProductName = $this->classUserProductModel->select($queryProductsName, $executeProductsName);

            $name = "{$datasProductName['product']} - {$datasProductBrand['brand']}";

            $queryProductsInsert = "INSERT
                                      INTO
                                        `tb_site.products`
                                      (
                                        product,
                                        price
                                      )
                                      VALUES
                                      (
                                        ?,
                                        ?
                                      )

            ";
            $executeProductsInsert = [$name, floatval($productPrice)];
            $this->classUserProductModel->query($queryProductsInsert, $executeProductsInsert);

            return $name;

        }

    }

}
