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

        $productName = $_POST['product'];
        $productBrand = $_POST['brand'];
        $productPrice = $_POST['price'];

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
                                    image,
                                    price
                                  )
                                  VALUES
                                  (
                                    ?,
                                    ?,
                                    ?
                                  )

        ";
        $file = $_FILES['image'];

        if ($file['error'] === 0) {
            $kb = 1024;
            $fileSize = $file['size'] / $kb;

            if ($fileSize <= 300) {
                $types = [
                    'image/png',
                    'image/jpg',
                    'image/jpeg',
                ];

                foreach ($types as $type) {

                    if ($type === $file['type']) {
                        $fileName = $file['name'];
                        $fileName = explode('.', $fileName);
                        $fileName = uniqid() . '.' . $fileName[array_key_last($fileName)];

                        $fileDir = $file['tmp_name'];
                        $newFileDir = DIR . $fileName;

                        move_uploaded_file($fileDir, $newFileDir);

                        $executeProductsInsert = [
                            $name,
                            $fileName,
                            floatval($productPrice),
                        ];
                        $this->classUserProductModel->query($queryProductsInsert, $executeProductsInsert);

                        return $name;

                    }

                }

            }

        }

        return 'error';

    }

}
