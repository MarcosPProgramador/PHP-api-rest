<?php
namespace Routes;
class classRoute {
    public function __construct() {

        $endpoint = \tasks::Endpoint();

        if (preg_match('/^[params\/ajax]+[\/a-zA-Z0-9]{0,100}$/', $endpoint)) {
            \tasks::Class('\Ajax\serviceAjax');
        }
        if (preg_match('/^[api\/]+[\/a-zA-Z0-9]{0,100}$/', $endpoint)) {
            \tasks::Class('\Apis\serviceApi');
        }

    }

}
