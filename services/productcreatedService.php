<?php
namespace Services;
class productcreatedService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function get() {
        $queryCreatedProduct = 'SELECT
                                  id,
                                  name,
                                  price
                                FROM
                                  `tb_site.user.createdproduct`
                                WHERE
                                  token = ?
        ';
        $executeCreatedProduct = [$_COOKIE['token']];

        $dataCreatedProduct = $this->classUserProductModel->selectAll($queryCreatedProduct, $executeCreatedProduct);
        return $dataCreatedProduct;
    }

    public function post() {

        $queryProductName = 'SELECT
                              product
                            FROM
                              `tb_site.productname`
                            WHERE
                              brand_id = ?
        ';
        $executeProductName = [$_POST['product']];

        $queryProductBrand = 'SELECT
                                brand
                              FROM
                                `tb_site.productbrand`
                              WHERE
                                id = ?
        ';
        $executeProductBrand = [$_POST['brand']];

        $queryCreatedProduct = 'INSERT
                                  INTO
                                    `tb_site.user.createdproduct`
                                      (
                                        name,
                                        token,
                                        email,
                                        price
                                      )
                                VALUES
                                      (
                                        ?,
                                        ?,
                                        ?,
                                        ?
                                      )
        ';

        $dataProductName = $this->classUserProductModel->select($queryProductName, $executeProductName);
        $dataProductBrand = $this->classUserProductModel->select($queryProductBrand, $executeProductBrand);
        $data = [
            'name'  => "{$dataProductName['product']} - {$dataProductBrand['brand']}",
            'price' => "{$_POST['price']}",
        ];

        $executeCreatedProduct = [
            $data['name'],
            $_COOKIE['token'],
            $_COOKIE['email'],
            $data['price'],
        ];

        $this->classUserProductModel->query($queryCreatedProduct, $executeCreatedProduct);

        return $data;
    }

    public function delete() {

        $_DELETE = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE')) {
            parse_str(file_get_contents('php://input'), $_DELETE);
        }

        $queryCreatedProduct = 'DELETE
                                  FROM
                                    `tb_site.user.createdproduct`
                                WHERE
                                  token = ?
                                AND
                                  id = ?
        ';
        $executeCreatedProduct = [$_COOKIE['token'], $_DELETE['productId']];

        $this->classUserProductModel->query($queryCreatedProduct, $executeCreatedProduct);

        return [
            'DeletedId' => $_DELETE['productId'],
        ];
    }

}
