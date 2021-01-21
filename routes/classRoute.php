<?php
namespace Routes;
class classRoute {
    public function __construct() {

        $endpoint = \tasks::Endpoint();

        if (preg_match('/^[service|controller\/ajax]+[\/a-z0-9]{0,100}$/i', $endpoint)) {
            \tasks::Class('\Ajax\requestAjax');
        }

        if (preg_match('/^[api\/]+[\/a-zA-Z0-9]{0,100}$/', $endpoint)) {
            \tasks::Class('\Apis\serviceApi');
        }

    }

}
