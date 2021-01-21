<?php
namespace Controllers;
class loginadminController {

    public function post() {
        $loginadminModel = \tasks::Class('\Models\loginadminModel');
        $responseEmail = $loginadminModel->checkEmail($_POST['email']);
        $responsePassword = $loginadminModel->checkPassword($_POST['password']);

        if (!$responseEmail['statusSuccess']) {
            return $responseEmail;
        }

        if (!$responsePassword['statusSuccess']) {
            return $responsePassword;
        }

        setcookie('loggedAdmin', true, time() + 86400, '/');

        return $responsePassword;

    }

}
