<?php
namespace Routes;
class viewRoute {
    private static string $response;
    public function __construct() {
        include './views/public/template.php';
    }

    public static function getConfig($config) {

        switch (self::$response) {

        case 'title':
            return $config['title'];

        case 'icon':
            return "views/public/assets/icon/{$config['icon']}";

        case 'script':

            if (isset($config['script'])) {
                $arr = [];

                foreach ($config['script'] as $value) {
                    $path = "views/public/assets/javascript/$value";

                    if (file_exists($path)) {
                        array_push($arr, $path);
                    }

                }

                if (count($arr)) {
                    return $arr;
                }

                return false;

            } else {
                return false;
            }

        case 'style':

            if (isset($config['style'])) {
                $arr = [];

                foreach ($config['style'] as $value) {
                    $path = "views/public/assets/styles/$value";

                    if (file_exists($path)) {
                        array_push($arr, $path);
                    }

                }

                if (count($arr)) {
                    return $arr;
                }

                return false;

            } else {
                return false;
            }

        case 'up':
            $up = $config['up'] ?? 'undefined';
            $path = "views/public/templates/$up";

            if (file_exists($path)) {
                include $path;
            }

            break;

        case 'middle':
            include "views/public/layouts/{$config['middle']}";
            break;

        case 'low':
            $low = $config['low'] ?? 'undefined';
            $path = "views/public/templates/$low";

            if (file_exists($path)) {
                include $path;
            }

            break;
        }

    }

    public static function setConfig($response) {
        self::$response = strtolower($response);

        switch (\tasks::Endpoint()) {
        case '/home':

            if (isset($_SESSION['logged'])) {
                $config = [
                    'title'  => 'Bem-vindo(a)!',
                    'icon'   => 'welcome.png',
                    'style'  => ['home.min.css'],
                    'up'     => 'header.php',
                    'middle' => 'home.php',
                    'low'    => 'footer.php',

                ];

                return self::getConfig($config);
            } else {
                header('Location: logIn');
                exit();
            }

        case '/login':
            $config = [
                'title'  => 'Faça Login',
                'icon'   => 'login.png',
                'script' => [
                    'login.js',
                    'loginEffects.js',
                ],
                'style'  => ['login.min.css'],
                'middle' => 'login.php',

            ];
            return self::getConfig($config);
        case '/admin':

            if (isset($_COOKIE['loggedAdmin'])) {

                $config = [
                    'title'  => 'Administrador',
                    'icon'   => 'admin.png',
                    'style'  => [
                        'admin.min.css',
                    ],
                    'script' => [
                        'adminEffects.js',
                        'usersOnline.js',
                        'usersToday.js',
                        'usersVisited.js',
                    ],
                    'up'     => 'headerAdmin.php',
                    'middle' => 'admin.php',
                    'low'    => 'footerAdmin.php',

                ];
                return self::getConfig($config);

            } else {

                header('Location: logInAdmin');
                exit();
            }

        case '/loginadmin':

            $config = [
                'title'  => 'Entrar como administrador!',
                'icon'   => 'loginAdmin.png',
                'style'  => ['loginAdmin.min.css'],
                'script' => [
                    'loginAdmin.js',
                    'loginAdminEffects.js',
                ],
                'middle' => 'loginAdmin.php',

            ];

            return self::getConfig($config);

        }

    }

}
