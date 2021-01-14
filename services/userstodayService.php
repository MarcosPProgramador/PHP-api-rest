<?php
namespace Services;

class userstodayService {

    public function get(int $id = null) {

        if ($id) {
            $query = 'SELECT * FROM `tb_admin.userstoday` WHERE id = ?';
            return \Models\serviceApiModel::select($id, $query);
        }

        $query = 'SELECT * FROM `tb_admin.userstoday`';
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

        $query = '  UPDATE `tb_admin.userstoday`

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
            $query = 'DELETE FROM `tb_admin.userstoday` WHERE id = ?';

            \Models\serviceApiModel::delete($id, $query);

            return json_encode([['deleted' => $id]]);

        }

    }

}
