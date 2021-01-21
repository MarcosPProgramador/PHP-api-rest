class loginAdminEffects {
  constructor() {
    this.effectShowOrHidePasswordField()
  }

  effectShowOrHidePasswordField() {
    const buttonEyePasswordField = _('#button-eye')

    buttonEyePasswordField.Event('click', ({ target }) => {
      const dataPassword = <string>(
        (<HTMLElement>target).getAttribute('data-password')
      )
      const formLoginPasswordField = <HTMLInputElement>(
        document.querySelector(dataPassword)
      )
      if (formLoginPasswordField.type === 'text')
        formLoginPasswordField.type = 'password'
      else formLoginPasswordField.type = 'text'
    })
  }
}
new loginAdminEffects()
