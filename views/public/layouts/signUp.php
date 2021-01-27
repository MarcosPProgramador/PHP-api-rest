<section class="background dark-theme">
    <div class="background__size">
        <div class="background__container">
            <!-- svg -->
            <div class="svg">
                <div class="svg__position">
                    <div class="svg__align">
                        <svg class="svg__size">
                            <image class="svg__size" xlink:href="<?php PATH?>views/public/assets/svg/undraw_sign_in_e6hj.svg" />
                        </svg>

                    </div>

                </div>

            </div>
            <!-- form -->
            <div class="form">
                <div class="form__background">
                    <div class="form__align">
                        <h2>Sign Up</h2>
                        <form method="get" >
                            <!-- top group -->
                            <div class="form__groups form__groups-top">
                                <div class="form__group">
                                    <input
                                        class="form__box-focus form__box form__box-firstname"
                                        name="firstname"
                                        id="signup-firstname"
                                        type="text"
                                        placeholder="Firstname"
                                    >

                                    <div data-box="#signup-firstname" class="form__message"></div>
                                </div>

                                <div class="form__group">
                                    <input

                                        class="form__box-focus form__box form__box-lastname"
                                        name="lastname"
                                        id="signup-lastname"
                                        type="text"
                                        placeholder="Lastname"
                                    >

                                    <div data-box="#signup-lastname" class="form__message"></div>
                                </div>
                            </div>
                            <!-- bottom group -->
                            <div class="form__groups form__groups-bottom">
                                <div class="form__group">
                                    <input

                                        class="form__box-focus form__box form__box-email"
                                        name="email"
                                        id="signup-email"
                                        type="email"
                                        placeholder="Email"
                                    >

                                    <div data-box="#signup-email" class="form__message"></div>
                                </div>

                                <div class="form__group">
                                    <input

                                        class="form__box-focus form__box form__box-password"
                                        name="password"
                                        id="signup-password"
                                        type="password"
                                        placeholder="Password"
                                    >


                                    <div class="form__eye">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                    <div data-box="#signup-password" class="form__message"></div>
                                </div>
                            </div>
                            <!-- submit group -->
                            <div class="form__groups form__groups-submit">
                                <div class="form__group">
                                    <input
                                    class="form__box form__box-submit"
                                    name="action"
                                    id="signup-submit"
                                    type="submit"
                                    value="Send"
                                    >
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>