<?php
namespace Routes;
class classRoute {
    public function __construct() {

        $endpoint = \tasks::Endpoint();

        switch ($endpoint) {
        case '/api/usersvisited':
            \tasks::Class('\Apis\serviceApi');
            break;
        case '/api/usersonline':
            \tasks::Class('\Apis\serviceApi');
            break;
        case '/api/userstoday':
            \tasks::Class('\Apis\serviceApi');
            break;

        }

        if (preg_match('/^[api\/usersvisited]+[0-9]{0,30}$/', $endpoint)) {
            \tasks::Class('\Apis\serviceApi');
        }

        if (preg_match('/^[api\/userstoday]+[0-9]{0,30}$/', $endpoint)) {
            \tasks::Class('\Apis\serviceApi');
        }

        if (preg_match('/^[api\/usersonline]+[0-9]{0,30}$/', $endpoint)) {
            \tasks::Class('\Apis\serviceApi');
        }

    }

}
