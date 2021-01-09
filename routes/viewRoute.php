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
                'script' => ['home.js', 'home_2.js'],
                'style'  => ['home.css', 'home_2.css'],
                'up'     => 'header.php',
                'middle' => 'home.php',
                'low'    => 'footer.php',

            ];
            return $this->getConfig($config);
        }

    }

}
