<?php
namespace Services;
class logInService {

    // Server
    public function post() {

        if (isset($_POST['email'])) {
            return ['email' => $_POST['email']];
        } else {
            return ['password' => $_POST['password']];
        }

    }

}
