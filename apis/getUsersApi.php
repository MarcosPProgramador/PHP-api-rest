<?php
namespace Apis;

class getUsersApi {
    public function __construct() {

        $url = $_GET['url'] ?? null;

        if (isset($url)) {
            $url = explode('/', $url);

            if ($url[0] === 'api') {

                header('Content-Type: application/json; charset=UTF-8');

                array_shift($url);
                $service = "\Services\\" . strtolower($url[0]) . "Service";
                $method = strtolower($_SERVER['REQUEST_METHOD']);
                array_shift($url);

                if (isset($url[0]) && intval($url[0])) {
                    try {
                        $response = call_user_func([new $service(), $method], $url[0]);

                        http_response_code(200);
                        echo json_encode(['status' => 'success', 'datas' => $response], JSON_UNESCAPED_UNICODE);
                    } catch (\Exception $th) {

                        http_response_code(204);
                        echo json_encode(['status' => 'error', 'datas' => $th->getMessage()]);
                    }

                    die();
                };
                try {
                    $response = call_user_func([new $service(), $method]);

                    http_response_code(200);
                    echo json_encode(['status' => 'success', 'datas' => $response], JSON_UNESCAPED_UNICODE);
                } catch (\Exception $th) {

                    http_response_code(204);
                    echo json_encode(['status' => 'error', 'datas' => $th->getMessage()]);
                }

                die();
            }

        }

    }

}