<?php
namespace Controllers;
class signUpController {
    public function __construct() {

        $this->signUpModel = \tasks::Class('\Models\signUpModel');

        if (isset($_GET['action'])) {
            $fields = $this->controllerFields();

            $condition =
                $fields['firstname'] &&
                $fields['lastname'] &&
                $fields['email'] &&
                $fields['password'];

            if ($condition) {
                $this->signUpModel->send();
            }

        }

    }

    public function controllerFields() {

        $firstname = $this->signUpModel->checkFields('firstname', $_GET['firstname']);
        $lastname = $this->signUpModel->checkFields('lastname', $_GET['lastname']);
        $email = $this->signUpModel->checkFields('email', $_GET['email']);
        $password = $this->signUpModel->checkFields('password', $_GET['password']);

        return [
            'firstname' => $firstname,
            'lastname'  => $lastname,
            'email'     => $email,
            'password'  => $password,
        ];
    }

}
