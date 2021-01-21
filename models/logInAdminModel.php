<?php
namespace Models;
class loginadminModel {

    public function checkEmail(string $email) {
        $connect = \tasks::ConnectDB();
        $this->email = $email;

        $query = $connect->prepare('SELECT email FROM `tb_admin.users` WHERE email = ?');
        $query->execute([$email]);

        if ($query->rowCount()) {
            return ['statusSuccess' => true, 'message' => 'sendful'];
        } else {
            return ['statusSuccess' => false, 'messageEmail' => 'E-mail não existe'];
        }

    }

    public function checkPassword(string $password) {
        $connect = \tasks::ConnectDB();

        $query = '  SELECT
                        email,
                        password
                    FROM
                        `tb_admin.users`
                    WHERE
                        email = ?
                    AND
                        password = ?
        ';

        $query = $connect->prepare($query);

        $query->execute([$this->email, $password]);

        if ($query->rowCount()) {
            return ['statusSuccess' => true, 'message' => 'sendful'];
        } else {
            return ['statusSuccess' => false, 'messagePassword' => 'Senha incorreta!'];
        }

    }

}
