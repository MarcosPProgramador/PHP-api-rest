<?php
namespace Services;
class productfavoritesService {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');
    }

    public function get() {
        $queryFavoritesProduct = 'SELECT
                                    id,
                                    name,
                                    price
                                  FROM
                                    `tb_site.user.favoritesproduct`
                                  WHERE
                                    token = ?
                                      GROUP BY
                                        name
                                      ORDER BY
                                        id
                                      ASC
        ';
        $executeFavoritesProduct = [$_COOKIE['token']];

        $datas = $this->classUserProductModel->selectAll($queryFavoritesProduct, $executeFavoritesProduct);
        return $datas;
    }

    public function post() {
        $queryFavoritesProduct = 'SELECT
                                    product,
                                    price
                                  FROM
                                    `tb_site.products`
                                  WHERE
                                    id = ?
        ';

        $executeFavoritesProduct = [$_POST['id']];

        $datas = $this->classUserProductModel->select($queryFavoritesProduct, $executeFavoritesProduct);

        $queryFavoritesProductInsert = 'INSERT INTO
                                        `tb_site.user.favoritesproduct`
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

        $executeFavoritesProductInsert = [
            $datas['product'],
            $_COOKIE['token'],
            $_COOKIE['email'],
            $datas['price'],
        ];

        $this->classUserProductModel->query($queryFavoritesProductInsert, $executeFavoritesProductInsert);

        return 'success';

    }

    public function delete() {
        $_DELETE = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE')) {
            parse_str(file_get_contents('php://input'), $_DELETE);
        }

        $queryFavoritesProductDelete = 'DELETE
                                          FROM
                                            `tb_site.user.favoritesproduct`
                                        WHERE
                                          token = ?
                                        AND
                                          id = ?
        ';

        $executeFavoritesProductDelete = [
            $_COOKIE['token'],
            $_DELETE['productId'],
        ];

        $this->classUserProductModel->query($queryFavoritesProductDelete, $executeFavoritesProductDelete);

        return [
            'DeletedId' => $_DELETE['productId'],
        ];
    }

}
