<?php
namespace Controllers;
class adminCheckUserController {
    public function __construct() {
        $this->classAdminCheckUserModel = \tasks::Class('\Models\adminCheckUserModel');

        $this->usersOnline();
        $this->usersToday();
        $this->usersVisited();

    }

    public function usersOnline() {
        // obter usuário offline da Tabela `tb_admin.usersonline`
        $user = $this->classAdminCheckUserModel->getUserOffFromUsersOnline();

        if ($user) { // deletar usuário offline da Tabela `tb_admin.usersonline`

            $this->classAdminCheckUserModel->deleteUserOffFromUsersOnline($user['token'], $user['email']);
            $this->classAdminCheckUserModel->insertUserOffInUsersToday($user);
        }

    }

    public function usersToday() {
        $userTodayOn = $this->classAdminCheckUserModel->getUserOnInUsersToday();
        $userToday = $this->classAdminCheckUserModel->getUserInUsersToday();

        if ($userTodayOn) {
            $this->classAdminCheckUserModel->deleteUserFromUsersToday($userTodayOn['token'], $userTodayOn['email']);
            $this->classAdminCheckUserModel->insertUserOnInUsersOnline($userTodayOn);
        } else

        if ($userToday) {
            $this->classAdminCheckUserModel->deleteUserFromUsersToday($userToday['token'], $userToday['email']);
            $this->classAdminCheckUserModel->insertUserTodayInUsersVisited($userToday);
        }

    }

    public function usersVisited() {

        $userVisitedOn = $this->classAdminCheckUserModel->getUserOnInUsersVisited();
        $userVisitedToday = $this->classAdminCheckUserModel->getUserTodayInUsersVisited();

        if ($userVisitedOn) {
            $this->classAdminCheckUserModel->deleteUserOnInUsersVisited($userVisitedOn['token'], $userVisitedOn['email']);
            $this->classAdminCheckUserModel->insertUserOnInUsersOnline($userVisitedOn);
        } else

        if ($userVisitedToday) {
            $this->classAdminCheckUserModel->deleteUserOnInUsersVisited($userVisitedToday['token'], $userVisitedToday['email']);
            $this->classAdminCheckUserModel->insertUserOnInUsersToday($userVisitedToday);
        }

    }

}
