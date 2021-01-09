<?php
namespace Services;

class usersService {

    public function get(int $id = null) {

        if ($id) {
            return \Models\usersModel::getUser($id);
        }

        return \Models\usersModel::getUsers();
    }

    public function post() {
        return \Models\usersModel::setUser();
    }

    public function put(int $id) {
        return \Models\usersModel::updateUser($id);
    }

    public function delete(int $id) {
        if ($id) {
            return \Models\usersModel::deleteUser($id);
        }

    }

}