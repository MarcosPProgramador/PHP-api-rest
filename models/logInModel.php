<?php
namespace Models;
class logInModel {
    public static function isRgEx($value, $emailOrPasswrod) {

        switch ($emailOrPasswrod) {
        case 'email':
            $conditions = [
                [
                    'condition' => !preg_match('/[A-Z]/i', $value),
                    'response'  => 'Não possui letras',
                ],
                [
                    'condition' => !preg_match('/\@/', $value),
                    'response'  => 'Não possui @',
                ],
                [
                    'condition' => !preg_match('/^([\w.-ç]{3,30})(\@)([A-Z]{3,20})((\.)([A-Z]{2,4}))((\.)([A-Z]{2}))?+$/i', $value),
                    'response'  => 'Ainda está faltando algo :(',
                ],
            ];

            foreach ($conditions as $condition) {

                if ($condition['condition']) {
                    return [
                        'message' => $condition['response'],
                        'success' => false,
                    ];
                }

            }

            $connect = \tasks::ConnectDB();

            $query = $connect->prepare('SELECT email FROM `tb_site.users` WHERE email = ?');

            $query->execute([$value]);

            if (!$query->rowCount()) {
                return [
                    'message' => 'Este e-mail não existe!',
                    'success' => false,
                ];
            }
            unset($_COOKIE['email']);
            setcookie('email', $value, time() + 86400, '/');
            return [
                'message' => 'Validado!',
                'success' => true,
            ];

            break;
        case 'password':
            $conditions = [
                [
                    'condition' => (strlen($value) < 10),
                    'response'  => 'O mínimo de caracteres é 10',
                ],
                [
                    'condition' => (strlen($value) > 40),
                    'response'  => 'O máximo de caracteres é 40',
                ],
                [
                    'condition' => !preg_match('/^([\w!@#$%&*]{10,40})+$/i', $value),
                    'response'  => 'Ainda está faltando algo :(',
                ],
            ];

            foreach ($conditions as $condition) {

                if ($condition['condition']) {
                    return [
                        'message' => $condition['response'],
                        'success' => false,
                    ];
                }

            }

            return [
                'message' => 'Validado!',
                'success' => true,
            ];
            break;

        }

    }

}
