<?php
namespace Routes;
class viewRoute {
    public function __construct() {
        include './views/public/template.php';
    }

    public function getConfig($config) {

        switch ($this->response) {

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
            include "views/public/templates/{$config['up']}";
            break;

        case 'middle':
            include "views/public/layouts/{$config['middle']}";
            break;

        case 'low':
            include "views/public/templates/{$config['low']}";
            break;
        }

    }

    public function setConfig($response) {
        $this->response = strtolower($response);

        switch (\tasks::Endpoint()) {
        case '/home':
            $config = [
                'title'  => 'welcome!',
                'icon'   => 'welcome.png',
                'style'  => ['home.min.css'],
                'up'     => 'header.php',
                'middle' => 'home.php',
                'low'    => 'footer.php',

            ];
            return $this->getConfig($config);
        case '/admin':

            if (isset($_COOKIE['admin'])) {

                $config = [
                    'title'  => 'Administrador',
                    'icon'   => 'admin.png',
                    'style'  => ['admin.min.css'],
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
                return $this->getConfig($config);

            } else {

                header('Location: logInAdmin');
                exit();
            }

        case '/loginadmin':

            $config = [
                'title'  => 'Entrar como administrador!',
                'icon'   => 'admin.png',
                'style'  => ['admin.min.css'],
                'up'     => 'headerAdmin.php',
                'middle' => 'admin.php',
                'low'    => 'footerAdmin.php',

            ];
            setcookie('admin', true, time() + 86400);

            return $this->getConfig($config);

        }

    }

}
