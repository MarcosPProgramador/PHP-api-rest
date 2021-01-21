<?php
namespace Controllers;
class loginController {

    // Server
    public function post() {

        $logIn = \tasks::Class('\Models\loginModel');

        if (isset($_POST['email'])) {

            $responseRgEx = $logIn::isRgEx($_POST['email'], 'email');

            $jsonSuccess = ['statusSuccess' => $responseRgEx['success'], 'message' => $responseRgEx['message']];
            $jsonError = ['statusSuccess' => $responseRgEx['success'], 'message' => $responseRgEx['message']];
            return $jsonError;

            if ($jsonSuccess['statusSuccess']) {

                return $jsonSuccess;

            } else {

                return $jsonError;

            };
        } else

        if (isset($_POST['password'])) {

            $responseRgEx = $logIn::isRgEx($_POST['password'], 'password');

            $jsonSuccess = ['statusSuccess' => $responseRgEx['success'], 'message' => $responseRgEx['message']];
            $jsonError = ['statusSuccess' => $responseRgEx['success'], 'message' => $responseRgEx['message']];
            return $jsonError;

            if ($jsonSuccess['statusSuccess']) {

                return $jsonSuccess;

            } else {

                return $jsonError;

            };

        }

        if (isset($_POST['emailSend']) && isset($_POST['passwordSend'])) {
            $connect = \tasks::ConnectDB();

            $query = $connect->prepare('SELECT email, password FROM `tb_site.users` WHERE email = ? AND password = ?');
            $query->execute([$_POST['emailSend'], $_POST['passwordSend']]);

            if ($query->rowCount()) {
                $jsonSuccess = ['statusSuccess' => true, 'message' => 'sendful'];
                $_SESSION['logged'] = true;
                return $jsonSuccess;
            }

            $jsonError = ['statusSuccess' => false, 'message' => 'Senha incorreta!'];
            return $jsonError;

        }

    }

}
