<?php
namespace Services;
class productpurchasedService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function get() {

        $queryPurchasedProductSelect = 'SELECT
                                          id,
                                          name,
                                          price

                                        FROM
                                          `tb_site.user.purchasedproduct`

                                        WHERE
                                          token = ?
        ';
        $executePurchasedProductSelect = [$_COOKIE['token']];

        $datas = $this->classUserProductModel->selectAll($queryPurchasedProductSelect, $executePurchasedProductSelect);

        return $datas;
    }

    public function post() {

        $queryProductsSelect = 'SELECT
                                  product,
                                  price
                                FROM
                                  `tb_site.products`
                                WHERE
                                  id = ?
        ';
        $executeArrProductsSelect = [$_POST['id']];

        $queryUsersSelect = ' SELECT
                                money
                              FROM
                                `tb_site.users`
                              WHERE
                                token = ?
        ';
        $executeArrUsersSelect = [$_COOKIE['token']];

        $datas = $this->classUserProductModel->select($queryProductsSelect, $executeArrProductsSelect);
        $datasMoney = $this->classUserProductModel->select($queryUsersSelect, $executeArrUsersSelect);

        try {
            $value = $datasMoney['money'] - $datas['price'];

            if ($value >= 0) {
                $queryUsers = 'UPDATE
                                `tb_site.users`

                              SET
                                money = ?

                              WHERE
                                token = ?

                ';
                $executeArrUsers = [$value, $_COOKIE['token']];

                $this->classUserProductModel->query($queryUsers, $executeArrUsers);

                $queryPurchasedProduct = ' INSERT INTO
                                            `tb_site.user.purchasedproduct`
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

                $executeArrPurchasedProduct = [$datas['product'], $_COOKIE['token'], $_COOKIE['email'], $datas['price']];

                $this->classUserProductModel->query($queryPurchasedProduct, $executeArrPurchasedProduct);

                return ['price' => $value];
            }

            return 'error';
        } catch (\Throwable $th) {
            return 'error';
        }

    }

    public function delete() {

        $_DELETE = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE')) {
            parse_str(file_get_contents('php://input'), $_DELETE);
        }

        $queryPurchasedProductDelete = 'DELETE
                                          FROM
                                            `tb_site.user.purchasedproduct`
                                        WHERE
                                          token = ?
                                        AND
                                          id = ?
        ';

        $executePurchasedProductDelete = [$_COOKIE['token'], $_DELETE['productId']];

        $this->classUserProductModel->query($queryPurchasedProductDelete, $executePurchasedProductDelete);

        return [
            'DeletedId' => $_DELETE['productId'],
        ];
    }

}
