<section class="background-bg__admin">
    <div class="admin__users-count">
        <h2>Users Online</h2>
        <div class="users admin__users-accountant blue-users">
            <div class="admin__count">
                <span id="count-blue" class="count--disabled">0</span>
                <button
                    class="admin__button-more admin__button-more--disabled"
                    data-enable-button-1="#blue-none  .admin__structure-list"
                    data-enable-button-2="#blue-none  .admin__structure-inline"
                    data-enable=".admin__button-blue" data-display="#blue-none"
                    data-toggle="#blue-users-info"
                >
                    <i class="fa fa-angle-down" aria-hidden="true"></i>

                    <div class="admin__disabled">
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </div>
        <div class="admin__users-today-info-dad">
            <div class="admin__users-today-info-controls admin__users-today-info-controls--disabled" id="blue-none" style="z-index: 11;">
                <button class="admin__button admin__button-blue">
                    <i class="fas fa-expand"></i>
                    <i class="fas fa-compress"></i>
                </button>
                <div class="admin__structures">
                    <button class="admin__structure-list" data-list="#blue-users-info">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <button class="admin__structure-inline" data-list="#blue-users-info">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </div>
            <div class="admin__users-today-info blue" id="blue-users-info"></div>

            <div class="admin__fixed-form-update" id="fadeout-blue">
                <div class="admin__form-update">
                    <div class="admin__form-update-close">
                        <button class="button--fadeout button-close" close="#fadeout-blue">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="form__input-group form__input-name-blue ">
                        <input type="text" placeholder="Name">
                    </div>
                    <div class="form__input-group form__input-ip-blue" >
                        <input type="text" placeholder="ip: 000.000.000.000">
                    </div>
                    <div class="form__input-group">
                        <button class="form__button form__button-send" id="blue-send">Send</button>

                        <div class="form__confirm-send ">
                            <h3>Do you really want to update this user?</h3>
                            <div class="form__buttons">
                                <button class="form__button form__button-yes button--fadeout" close="#fadeout-blue" id="blue-yes">Yes</button>
                                <button class="form__button form__button-no button--fadeout" close="#fadeout-blue">no</button>

                            </div>
                        </div>
                        <div class="form__confirm-error">
                            <div class="form__confirm-error-message">
                                <span>Error: </span>
                                <span id="errorMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officiis saepe cum debitis nostrum, mollitia aperiam enim nihil pariatur impedit recusandae ut provident cupiditate non quaerat, eligendi et in laborum!</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    </div>

    <div class="admin__users-count">
        <h2>Users who visited today</h2>
        <div class="users admin__users-accountant green-users">
            <div  class="admin__count">
                <span id="count-green" class="count--disabled">0</span>
                <button
                    class="admin__button-more admin__button-more--disabled"
                    data-enable-button-1="#green-none  .admin__structure-list"
                    data-enable-button-2="#green-none  .admin__structure-inline"
                    data-enable=".admin__button-green"
                    data-display="#green-none"
                    data-toggle="#green-users-info"
                >
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="admin__disabled">
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </div>
        <div class="admin__users-today-info-dad">
            <div class="admin__users-today-info-controls admin__users-today-info-controls--disabled" id="green-none" style="z-index: 9;">
                <button class="admin__button admin__button-green">
                    <i class="fas fa-expand"></i>
                    <i class="fas fa-compress"></i>
                </button>
                <div class="admin__structures">
                    <button class="admin__structure admin__structure-list" data-list="#green-users-info">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <button class="admin__structure admin__structure-inline" data-list="#green-users-info">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </div>
            <div class="admin__users-today-info green" id="green-users-info"></div>

            <div class="admin__fixed-form-update" id="fadeout-green">
                <div class="admin__form-update">
                    <div class="admin__form-update-close">
                        <button class="button--fadeout button-close" close="#fadeout-green">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="form__input-group form__input-name-green ">
                        <input type="text" placeholder="Name">
                    </div>
                    <div class="form__input-group form__input-ip-green" >
                        <input type="text" placeholder="ip: 000.000.000.000">
                    </div>
                    <div class="form__input-group">
                        <button class="form__button form__button-send" id="green-send">Send</button>

                        <div class="form__confirm-send ">
                            <h3>Do you really want to update this user?</h3>
                            <div class="form__buttons">
                                <button class="form__button form__button-yes button--fadeout" close="#fadeout-green" id="green-yes">Yes</button>
                                <button class="form__button form__button-no button--fadeout" close="#fadeout-green">no</button>

                            </div>
                        </div>
                        <div class="form__confirm-error">
                            <div class="form__confirm-error-message">
                                <span>Error: </span>
                                <span id="errorMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officiis saepe cum debitis nostrum, mollitia aperiam enim nihil pariatur impedit recusandae ut provident cupiditate non quaerat, eligendi et in laborum!</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="admin__users-count">
        <h2>Users who visited</h2>
        <div class="users admin__users-accountant red-users">
            <div class="admin__count">
                <span id="count-red" class="count--disabled">0</span>
                <button
                    class="admin__button-more admin__button-more--disabled"
                    data-enable-button-1="#red-none .admin__structure-list"
                    data-enable-button-2="#red-none .admin__structure-inline"
                    data-enable=".admin__button-red"
                    data-display="#red-none"
                    data-toggle="#red-users-info"
                >
                    <i class="fa fa-angle-down" aria-hidden="true"></i>

                    <div class="admin__disabled">
                        <span></span>
                        <span></span>
                    </div>

                </button>
            </div>
        </div>
        <div class="admin__users-today-info-dad">
            <div class="admin__users-today-info-controls admin__users-today-info-controls--disabled" id="red-none" style="z-index: 7;">
                <button class="admin__button admin__button-red">
                    <i class="fas fa-expand"></i>
                    <i class="fas fa-compress"></i>
                </button>
                <div class="admin__structures">
                    <button class="admin__structure-list" data-list="#red-users-info">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <button class="admin__structure-inline" data-list="#red-users-info">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </div>
            <div class="admin__users-today-info red" id="red-users-info"></div>

            <div class="admin__fixed-form-update" id="fadeout-red">
                <div class="admin__form-update">
                    <div class="admin__form-update-close">
                        <button class="button--fadeout button-close" close="#fadeout-red">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="form__input-group form__input-name-red ">
                        <input type="text" placeholder="Name">
                    </div>
                    <div class="form__input-group form__input-ip-red" >
                        <input type="text" placeholder="ip: 000.000.000.000">
                    </div>
                    <div class="form__input-group">
                        <button class="form__button form__button-send" id="red-send">Send</button>

                        <div class="form__confirm-send ">
                            <h3>Do you really want to update this user?</h3>
                            <div class="form__buttons">
                                <button class="form__button form__button-yes button--fadeout" close="#fadeout-red" id="red-yes">Yes</button>
                                <button class="form__button form__button-no button--fadeout" close="#fadeout-red">no</button>

                            </div>
                        </div>
                        <div class="form__confirm-error">
                            <div class="form__confirm-error-message">
                                <span>Error: </span>
                                <span id="errorMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officiis saepe cum debitis nostrum, mollitia aperiam enim nihil pariatur impedit recusandae ut provident cupiditate non quaerat, eligendi et in laborum!</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>


</section>