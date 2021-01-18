class logIn {
  constructor() {
    this.Email()
    this.Password()
  }
  isValid(formInputValue: string): false | true {
    if (formInputValue.match(/[a-zA-Z]/g) && formInputValue) return true
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
  requestAjaxLoginPost(formInputValue: string, input: string) {
    __.ajax({
      method: 'post',
      dataType: 'json',
      data: { [input]: formInputValue },
      url:
        'http://localhost/projetos/linguagens/PHP_api-rest/params/ajax/login',
      success: function ({ datas }) {
        console.log(datas)
      },
    })
  }
}
new logIn()
