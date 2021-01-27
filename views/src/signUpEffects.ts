class signUpEffects {
  constructor() {
    this.checkFields()
  }
  checkContentInFormMessage() {
    const formMessages = document.querySelectorAll('.form__message')

    formMessages.forEach((element) => {
      const dataBox = <string>element.getAttribute('data-box')
      const elm = <HTMLElement>document.querySelector(dataBox)
      if (element.textContent) {
        elm?.classList.add('form__box--error')
      } else {
        elm?.classList.remove('form__box--error')
      }
    })
  }
  checkFields() {
    const boxes = document.querySelectorAll('.form__box-focus')
    boxes.forEach((box) => {
      const checkField = ({ target }: Event) => {
        const boxValue = (target as HTMLInputElement).value
        const value = <string>(target as HTMLElement).getAttribute('id')
        const messageField = <HTMLElement>(
          document.querySelector(`[data-box="#${value}"]`)
        )

        if (!boxValue) {
          _(messageField).Content('Campo está vazio')
          this.checkContentInFormMessage()
        } else {
          _(messageField).Content('')
          this.checkContentInFormMessage()
          switch (value) {
            case 'signup-firstname':
              const isfirstname = boxValue.match(
                /^[A-Záéíóúâêîôûãõàèìòùç]{2,50}$/i
              )
              if (!isfirstname) {
                _(messageField).Content('Nome inválido')
                this.checkContentInFormMessage()
              }
              break
            case 'signup-lastname':
              const islastname = boxValue.match(
                /^[A-Záéíóúâêîôûãõàèìòùç]{2,50}$/i
              )
              if (!islastname) {
                _(messageField).Content('Sobrenome inválido')
                this.checkContentInFormMessage()
              }
              break
            case 'signup-email':
              const isemail = boxValue.match(
                /^([A-Z0-9-_.]{3,30})(\@)([A-Z]{3,20})(\.)([A-Z]{2,4})((\.)([A-Z]{2}))?$/i
              )
              if (!isemail) {
                _(messageField).Content('E-mail inválido')
                this.checkContentInFormMessage()
              }
              break
            case 'signup-password':
              const ispassword = boxValue.match(/^([A-Z0-9-_.]{10,30})$/i)
              if (boxValue.length < 10) {
                _(messageField).Content('Senha curta')
                this.checkContentInFormMessage()
                break
              }
              if (!ispassword) {
                _(messageField).Content('Senha inválida')
                this.checkContentInFormMessage()
              }
              break
          }
        }
      }

      _(box as HTMLElement).Event('focus', checkField)
      _(box as HTMLElement).Event('keyup', checkField)
    })
  }
}
new signUpEffects()
