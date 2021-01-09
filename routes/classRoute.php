<?php
namespace Routes;
class classRoute {
    public function __construct() {

        $endpoint = \tasks::Endpoint();

        switch ($endpoint) {
        case '/api/users':
            \tasks::Class('\Apis\getUsersApi');
            break;

        }

        if (preg_match('/^[api\/users]+[0-9]{0,30}$/', $endpoint)) {
            \tasks::Class('\Apis\getUsersApi');
        }

    }

}
