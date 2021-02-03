<?php
namespace Models;
class signUpModel {
    public function send() {
        $this->connectDB = \tasks::ConnectDB();
        $datas = [
            'firstname' => $_GET['firstname'],
            'lastname'  => $_GET['lastname'],
            'email'     => $_GET['email'],
            'password'  => $_GET['password'],
            'token'     => $_COOKIE['token'],
            'date'      => date('Y-m-d H:i:s'),
        ];

        if (!$this->emailExists($datas['email'])) {
            $query = '  INSERT INTO `tb_site.users`
                        (
                            firstname,
                            lastname,
                            email,
                            password,
                            token,
                            lastaction
                        )
                        VALUES
                        (
                            ?,
                            ?,
                            ?,
                            ?,
                            ?,
                            ?
                        )
            ';

            $queryDB = $this->connectDB->prepare($query);

            $queryDB->execute([
                $datas['firstname'],
                $datas['lastname'],
                $datas['email'],
                $datas['password'],
                $datas['token'],
                $datas['date'],
            ]);
            setcookie('email', $datas['email'], time() + 86400, '/');
            setcookie('logged', true, time() + 86400, '/');
            header('Location: products');
            exit();
        }

    }

    public function emailExists(string $email) {
        $query = '  SELECT
                        email
                    FROM
                        `tb_site.users`
                    WHERE
                        email = ?
        ';

        $queryDB = $this->connectDB->prepare($query);
        $queryDB->execute([$email]);

        if ($queryDB->rowCount()) {
            return true;
        }

        return false;
    }

    public function checkFields(string $field, $value) {

        switch ($field) {
        case 'firstname':

            if (preg_match('/^([A-Záéíóúâêîôûãõàèìòùç]{2,50})+$/i', $value)) {
                return true;

            }

            return false;

        case 'lastname':

            if (preg_match('/^([A-Záéíóúâêîôûãõàèìòùç]{2,50})+$/i', $value)) {
                return true;

            }

            return false;

        case 'email':

            if (preg_match('/^([\w.-ç]{3,30})(\@)([A-Z]{3,20})((\.)([A-Z]{2,4}))((\.)([A-Z]{2}))?+$/i', $value)) {
                return true;

            }

            return false;

        case 'password':

            if (preg_match('/^([\w!@#$%&*]{10,40})+$/i', $value)) {
                return true;

            }

            return false;

        }

    }

}
