<?php
namespace Models;
class adminCheckUserModel {
    public function __construct() {
        $this->classUserProductModel = \tasks::Class('\Models\userproductModel');

    }

    public function getUserOffFromUsersOnline() { // table `tb_admin.usersonline`
        $query = 'SELECT
                    name,
                    email,
                    token,
                    ip,
                    lastaction
                  FROM
                    `tb_admin.usersonline`
                  WHERE
                    lastaction
                      <=
                        NOW()
                          -
                            INTERVAL 1 MINUTE
        ';

        $user = $this->classUserProductModel->select($query, null);

        return $user;
    }

    public function deleteUserOffFromUsersOnline(string $token, string $email) {
        $query = 'DELETE
                    FROM
                      `tb_admin.usersonline`
                  WHERE
                    token = ?
                  AND
                    email = ?
        ';

        $this->classUserProductModel->query($query, [$token, $email]);
    }

    public function insertUserOffInUsersToday(array $User) {

        $query = 'INSERT
                    INTO
                      `tb_admin.userstoday`
                    (
                      name,
                      email,
                      token,
                      ip,
                      lastaction
                    )

                    VALUES
                    (
                       ?,
                       ?,
                       ?,
                       ?,
                       ?
                    )
        ';
        $execute = [
            $User['name'],
            $User['email'],
            $User['token'],
            $User['ip'],
            $User['lastaction'],
        ];

        $this->classUserProductModel->query($query, $execute);
    }

    public function getUserOnInUsersToday() { // table `tb_admin.userstoday`

        $query = 'SELECT
                    name,
                    email,
                    token,
                    ip,
                    lastaction
                  FROM
                    `tb_admin.userstoday`
                  WHERE
                    lastaction
                      >
                        NOW()
                          -
                            INTERVAL 1 MINUTE
        ';

        $execute = null;

        $data = $this->classUserProductModel->select($query, $execute);

        return $data;
    }

    public function getUserInUsersToday() {

        $query = 'SELECT
                    name,
                    email,
                    token,
                    ip,
                    lastaction
                  FROM
                    `tb_admin.userstoday`
                  WHERE
                    lastaction
                      <=
                        NOW()
                          -
                            INTERVAL 1 DAY
        ';

        $execute = null;

        $data = $this->classUserProductModel->select($query, $execute);

        return $data;
    }

    public function deleteUserFromUsersToday(string $token, string $email) {

        $query = 'DELETE FROM `tb_admin.userstoday` WHERE token = ? AND email = ?';
        $execute = [$token, $email];

        $this->classUserProductModel->query($query, $execute);
    }

    public function insertUserOnInUsersOnline(array $User) {

        $query = 'INSERT
                    INTO
                      `tb_admin.usersonline`
                    (
                      name,
                      email,
                      token,
                      ip,
                      lastaction
                    )
                    VALUES
                    (
                      ?,
                      ?,
                      ?,
                      ?,
                      ?
                    )
        ';
        $execute = [
            $User['name'],
            $User['email'],
            $User['token'],
            $User['ip'],
            $User['lastaction'],
        ];

        $this->classUserProductModel->query($query, $execute);
    }

    public function insertUserTodayInUsersVisited(array $User) {

        $query = 'INSERT
                    INTO
                      `tb_admin.usersvisited`
                    (
                      name,
                      email,
                      token,
                      ip,
                      lastaction
                    )
                    VALUES
                    (
                      ?,
                      ?,
                      ?,
                      ?,
                      ?
                    )
        ';
        $execute = [
            $User['name'],
            $User['email'],
            $User['token'],
            $User['ip'],
            $User['lastaction'],
        ];

        $this->classUserProductModel->query($query, $execute);
    }

    public function getUserOnInUsersVisited() { // table `tb_admin.usersvisited`

        $query = 'SELECT
                    name,
                    email,
                    token,
                    ip,
                    lastaction
                  FROM
                    `tb_admin.usersvisited`
                  WHERE
                    lastaction
                      >
                        NOW()
                          -
                            INTERVAL 1 MINUTE
      ';

        $execute = null;

        $data = $this->classUserProductModel->select($query, $execute);

        return $data;
    }

    public function getUserTodayInUsersVisited() {

        $query = 'SELECT
                    name,
                    email,
                    token,
                    ip,
                    lastaction
                  FROM
                    `tb_admin.usersvisited`
                  WHERE
                    lastaction
                      >
                        NOW()
                          -
                            INTERVAL 1 DAY
      ';

        $execute = null;

        $data = $this->classUserProductModel->select($query, $execute);

        return $data;
    }

    public function deleteUserOnInUsersVisited(string $token, string $email) {

        $query = 'DELETE
                    FROM
                      `tb_admin.usersvisited`
                    WHERE
                      token = ?
                    AND
                      email = ?
          ';
        $execute = [$token, $email];

        $this->classUserProductModel->query($query, $execute);
    }

    public function insertUserOnInUsersToday(array $User) {

        $query = 'INSERT
                    INTO
                      `tb_admin.userstoday`
                    (
                      name,
                      email,
                      token,
                      ip,
                      lastaction
                    )
                    VALUES
                    (
                      ?,
                      ?,
                      ?,
                      ?,
                      ?
                    )
        ';
        $execute = [
            $User['name'],
            $User['email'],
            $User['token'],
            $User['ip'],
            $User['lastaction'],
        ];

        $this->classUserProductModel->query($query, $execute);
    }
}