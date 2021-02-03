<?php
namespace Controllers;
class userproductController {
    public function __construct() {
        $connect = \tasks::ConnectDB();
        $classUserproductModel = \tasks::Class('\Models\userproductModel');

        $classUserproductModel->userCreatedProduct($connect);
        $classUserproductModel->userPurchasedProduct($connect);
        $classUserproductModel->userFavoritesProduct($connect);
    }

}
