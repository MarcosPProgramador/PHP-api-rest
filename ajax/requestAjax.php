<?php
namespace Ajax;

class requestAjax {

    public function __construct() {

        $endpoint = \tasks::Endpoint();
        $url = explode('/', $endpoint);

        array_shift($url);
        $serviceOrController = ucfirst($url[0]);

        array_shift($url);

        if (isset($url[0]) && $url[0] === 'ajax') {

            array_shift($url);
            $nameServiceOrController = strtolower($url[0]);

            header('Content-type: application/json');

            if (isset($nameServiceOrController)) {

                $method = strtolower($_SERVER['REQUEST_METHOD']);
                $class = "\\{$serviceOrController}s\\{$nameServiceOrController}{$serviceOrController}";

                if (\method_exists($class, $method)) {
                    $response = call_user_func([$class, $method]);

                    http_response_code(200);
                    echo json_encode($response, JSON_UNESCAPED_UNICODE);

                }

            }

            die();
        }

    }

}
