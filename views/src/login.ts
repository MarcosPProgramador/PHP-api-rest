class logIn {
  constructor() {
    this.Email()
    this.Password()
    this.requestAjaxSendEmailPassword()
  }
  isValid(formInputValue: string): false | true {
    if (formInputValue.match(/[a-zA-Z0-9]/g) && formInputValue) return true
    return false
  }
  Email() {
    let stateEmail = ''
    const formloginEmail = <HTMLElement>(
      document.querySelector('#formlogin-email')
    )
    _(formloginEmail).Event('focus', () => {
      _(formloginEmail).Event('keyup', (event) => {
        const formloginEmailValue = (event?.target as HTMLInputElement).value

        if (formloginEmailValue != stateEmail) {
          stateEmail = formloginEmailValue

          if (this.isValid(formloginEmailValue))
            this.requestAjaxLoginPost(formloginEmailValue, 'email')
        }
      })
    })
  }
  Password() {
    let statePassword = ''
    const formloginPassword = <HTMLElement>(
      document.querySelector('#formlogin-password')
    )
    _(formloginPassword).Event('focus', () => {
      _(formloginPassword).Event('keyup', ({ target }) => {
        const formloginPasswordValue = (target as HTMLInputElement).value

        if (formloginPasswordValue != statePassword) {
          statePassword = formloginPasswordValue

          if (this.isValid(formloginPasswordValue))
            this.requestAjaxLoginPost(formloginPasswordValue, 'password')
        }
      })
    })
  }
  requestAjaxLoginPost(formInputValue: string | false, input: string) {
    __.ajax({
      method: 'post',
      dataType: 'json',
      data: { [input]: formInputValue },
      url:
        'http://localhost/projetos/linguagens/PHP_api-rest/controller/ajax/login',
      success: function (data: { statusSuccess: boolean; message: string }) {
        const emailErrorMessage = _('#emailErrorMessage')
        const passwordErrorMessage = _('#passwordErrorMessage')
        const emailSuccessMessage = _('#emailSuccessMessage')
        const passwordSuccessMessage = _('#passwordSuccessMessage')

        const message = data.message
        const statusSuccess = data.statusSuccess

        if (!statusSuccess) {
          if (input == 'email') {
            emailSuccessMessage.Content('')
            emailErrorMessage.Content(message)

            localStorage.removeItem('email')
          } else {
            passwordSuccessMessage.Content('')
            passwordErrorMessage.Content(message)

            localStorage.removeItem('pass')
          }
        } else {
          if (input == 'email') {
            emailErrorMessage.Content('')
            emailSuccessMessage.Content(message)

            localStorage.setItem('email', 'true')
          } else {
            passwordErrorMessage.Content('')
            passwordSuccessMessage.Content(message)

            localStorage.setItem('pass', 'true')
          }
        }
        const email = localStorage.getItem('email')
        const pass = localStorage.getItem('pass')

        const formloginAction = <HTMLDivElement>(
          document.querySelector('#formlogin-action')
        )
        if (email && pass) {
          formloginAction.classList.remove('formlogin__submit--disabled')
        } else formloginAction.classList.add('formlogin__submit--disabled')
      },
    })
  }
  requestAjaxSendEmailPassword() {
    $('#formlogin-action').on('click', (e) => {
      e.preventDefault()
      __.ajax({
        method: 'post',
        dataType: 'json',
        data: {
          emailSend: $('#formlogin-email').val(),
          passwordSend: $('#formlogin-password').val(),
        },
        url:
          'http://localhost/projetos/linguagens/PHP_api-rest/controller/ajax/login',
        success: (datas) => {
          if (!datas.statusSuccess) {
            const passwordErrorMessage = <HTMLDivElement>(
              document.querySelector('#passwordErrorMessage')
            )
            const passwordSuccessMessage = <HTMLDivElement>(
              document.querySelector('#passwordSuccessMessage')
            )
            const formloginAction = <HTMLDivElement>(
              document.querySelector('#formlogin-action')
            )
            passwordSuccessMessage.innerText = ''
            passwordErrorMessage.innerText = datas.message
            formloginAction.classList.add('formlogin__submit--disabled')
          } else {
            location.href =
              'http://localhost/projetos/linguagens/PHP_api-rest/home'
          }
        },
      })
    })
  }
}
new logIn()
