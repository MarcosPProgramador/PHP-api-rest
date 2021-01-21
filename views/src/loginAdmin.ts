class loginAdmin {
  private RegExpEmail: RegExp
  private RegExpPassword: RegExp
  constructor() {
    this.changeInputEmail()
    this.changeInputPassword()
    this.changeInputSubmit()

    this.RegExpEmail = /^([a-z0-9-_.]{3,30})(@)([a-z]{3,30})(\.)([a-z]{2,4})((\.)([a-z]{2}))?$/i
    this.RegExpPassword = /^([a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9!@#$%&*-_.]){10,30}$/i
  }
  changeInputEmail() {
    const formloginAdminEmail = _('#formloginAdmin-email')
    formloginAdminEmail.Event('focus', () => {
      formloginAdminEmail.Event('keyup', ({ target }) => {
        const formloginAdminEmailValue = (target as HTMLInputElement).value

        this.checkFields('email', formloginAdminEmailValue)
      })
    })
  }
  changeInputPassword() {
    const formloginAdminPassword = _('#formloginAdmin-password')
    formloginAdminPassword.Event('focus', () => {
      formloginAdminPassword.Event('keyup', ({ target }) => {
        const formloginAdminPasswordValue = (target as HTMLInputElement).value

        this.checkFields('password', formloginAdminPasswordValue)
      })
    })
  }
  changeInputSubmit() {
    const formloginAdminSubmit = _('#formloginAdmin-submit')
    formloginAdminSubmit.Event('click', (e) => {
      e.preventDefault()
      const formloginAdminPasswordValue = (<HTMLInputElement>(
        document.querySelector('#formloginAdmin-password')
      )).value
      const formloginAdminEmailValue = (<HTMLInputElement>(
        document.querySelector('#formloginAdmin-email')
      )).value

      if (
        formloginAdminPasswordValue.match(this.RegExpPassword) &&
        formloginAdminEmailValue.match(this.RegExpEmail)
      ) {
        this.requestAjaxSendPost(
          formloginAdminEmailValue,
          formloginAdminPasswordValue
        )
      }
    })
  }
  checkFields(input: string, value: string) {
    switch (input) {
      case 'email':
        const emailErrorMessage = _('#emailErrorMessage')
        const emailSuccessMessage = _('#emailSuccessMessage')
        emailErrorMessage.Content('')
        emailSuccessMessage.Content('')

        if (value.match(this.RegExpEmail)) {
          emailSuccessMessage.Content('Success')
        } else {
          emailErrorMessage.Content('Falta alguma coisa :(')
        }

        break
      case 'password':
        const passwordErrorMessage = _('#passwordErrorMessage')
        const passwordSuccessMessage = _('#passwordSuccessMessage')

        passwordSuccessMessage.Content('')
        passwordErrorMessage.Content('')

        if (value.length < 10) {
          passwordErrorMessage.Content('Essa senha é muito curta')
          return
        }
        if (value.length > 30) {
          passwordErrorMessage.Content('Essa senha é muito grande')
          return
        }
        if (value.match(this.RegExpPassword)) {
          passwordSuccessMessage.Content('Success')
        } else {
          passwordErrorMessage.Content('Error')
        }
        break
    }
  }
  requestAjaxSendPost(...inputs: string[]) {
    const [email, password] = inputs

    __.ajax({
      method: 'post',
      url:
        'http://localhost/projetos/linguagens/PHP_api-rest/controller/ajax/loginadmin',
      dataType: 'json',
      data: { email: email, password: password },
      success: (datas: {
        statusSuccess: boolean
        messageEmail: string
        messagePassword: string
      }) => {
        const passwordErrorMessage = _('#passwordErrorMessage')
        const passwordSuccessMessage = _('#passwordSuccessMessage')
        const emailErrorMessage = _('#emailErrorMessage')
        const emailSuccessMessage = _('#emailSuccessMessage')

        emailErrorMessage.Content('')
        passwordErrorMessage.Content('')

        if (!datas.statusSuccess) {
          if (datas.messageEmail) {
            emailSuccessMessage.Content('')
            emailErrorMessage.Content(datas.messageEmail)
          } else {
            passwordSuccessMessage.Content('')
            passwordErrorMessage.Content(datas.messagePassword)
          }
        } else {
          location.href =
            'http://localhost/projetos/linguagens/PHP_api-rest/Admin'
        }
      },
    })
  }
}
new loginAdmin()
