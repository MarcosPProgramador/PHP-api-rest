<?php
namespace Services;

class usersvisitedService {

    public function get(int $id = null) {

        if ($id) {
            $query = 'SELECT * FROM `tb_admin.usersvisited` WHERE id = ?';
            return \Models\serviceApiModel::select($id, $query);
        }

        $query = 'SELECT * FROM `tb_admin.usersvisited`';
        return \Models\serviceApiModel::selectAll($query);
    }

    public function put() {
        $_PUT = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT')) {
            parse_str(file_get_contents('php://input'), $_PUT);
        }

        $id = $_PUT['id'];
        $name = $_PUT['name'];
        $ip = $_PUT['ip'];

        $query = '  UPDATE `tb_admin.usersvisited`

                    SET

                        name = ?,
                        ip = ?

                    WHERE

                        id = ?
        ';

        \Models\serviceApiModel::update($query, [$name, $ip, $id]);

        return json_encode([['updated' => $id]]);
    }

    public function delete() {

        $_DELETE = [];

        if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE')) {
            parse_str(file_get_contents('php://input'), $_DELETE);
        }

        $id = $_DELETE['id'];

        if ($id) {
            $query = 'DELETE FROM `tb_admin.usersvisited` WHERE id = ?';

            \Models\serviceApiModel::delete($id, $query);

            return json_encode([['deleted' => $id]]);

        }

    }

}
