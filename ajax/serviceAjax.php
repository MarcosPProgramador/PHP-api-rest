<?php
namespace Ajax;

class serviceAjax {

    public function __construct() {

        $endpoint = \tasks::Endpoint();
        $url = explode('/', $endpoint);
        array_shift($url);
        array_shift($url);

        if (isset($url[0]) && $url[0] === 'ajax') {
            header('Content-type: application/json');
            array_shift($url);

            $method = strtolower($_SERVER['REQUEST_METHOD']); // output:  post
            $service = "\Services\\" . strtolower($url[0]) . "Service"; // output: \Services\postService

            $response = call_user_func([new $service(), $method]);

            http_response_code(200);
            echo json_encode(['status' => 'success', 'datas' => $response], JSON_UNESCAPED_UNICODE); 
            // output: {status: "success", datas: "[{"name":"marcos"}]"} or null

            die();
        }

    }

}
