<?php
namespace Ajax;

class requestAjax {

    public function __construct() {

        $endpoint = \tasks::Endpoint();

        $this->url = explode('/', $endpoint);
        array_shift($this->url);

        $this->serviceOrController = ucfirst($this->url[0]);
        array_shift($this->url);

        $this->checkUrl();

    }

    public function checkUrl() {

        if (isset($this->url[0]) && $this->url[0] === 'ajax') {

            array_shift($this->url);

            $this->nameServiceOrController =
            isset($this->url[0]) ?
            strtolower($this->url[0]) : null;

            header('Content-type: application/json');

            $this->checkServiceController();

            die();
        }

    }

    public function checkServiceController() {

        if (isset($this->nameServiceOrController)) {

            $this->method = strtolower($_SERVER['REQUEST_METHOD']);
            $this->class = "\\{$this->serviceOrController}s\\{$this->nameServiceOrController}{$this->serviceOrController}";
            $this->checkMethod();

        }

    }

    public function checkMethod() {

        if (\method_exists($this->class, $this->method)) {
            $response = call_user_func([$this->class, $this->method]);

            http_response_code(200);
            echo json_encode($response, JSON_UNESCAPED_UNICODE);

        }

    }

}
