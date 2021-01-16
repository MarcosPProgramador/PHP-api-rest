let count: number = 0
class effects {
  constructor() {
    this.handleClick()
  }
  private handleClick() {
    const dataToggle = $('[data-toggle]')
    dataToggle.each((index, element) => {
      $(element).on('click', (event) => {
        const target = $(event.target)

        this.effectToggleInfoUsers(target)
        this.effectToggleDisplay(target)
        this.effectClickButton(target)
        this.effectToggleFixed(target)
      })
    })
    this.effectShowFormUpdate()
    this.showHeader()
    this.animateNav()
  }

  private effectClickButton(target: JQuery<HTMLElement>) {
    target.toggleClass('admin__button-more--active')
  }

  private effectToggleInfoUsers(target: JQuery<HTMLElement>) {
    const id = <string>target.attr('data-toggle')

    $(id).toggleClass('admin__users-today-info--active')
  }
  private effectToggleDisplay(target: JQuery<HTMLElement>) {
    const id = <string>target.attr('data-display')

    $(id).toggleClass('admin__users-today-info-controls--active')
  }
  private effectToggleFixed(target: JQuery<HTMLElement>) {
    const _class = <string>$(target).attr('data-enable')

    const button1 = <string>$(target).attr('data-enable-button-1')
    const button2 = <string>$(target).attr('data-enable-button-2')

    $(_class).on('click', ({ target }) => {
      const parent = $(target).parent().parent()
      parent.toggleClass('admin__users-today-info-dad--fixed')
    })

    $(button1).on(`click`, () => {
      const id = $(button1).attr('data-list')

      $(`${id} .admin__user-today`).removeClass(`admin__user-today--inline`)
      $(`${id} .admin__user-today`).addClass(`admin__user-today--list`)
    })
    $(button2).on(`click`, () => {
      const id = $(button1).attr('data-list')
      $(`${id} .admin__user-today`).removeClass(`admin__user-today--list`)
      $(`${id} .admin__user-today`).addClass(`admin__user-today--inline`)
    })
  }
  private effectShowFormUpdate() {
    $('.button--fadeout').each((i, element) => {
      $(element).on('click', ({ target }) => {
        const id = <string>$(target).attr('close')
        $('.form__confirm-send').removeClass('form__confirm-send--show')
        $(id).removeClass('admin__fixed-form-update--show')
      })
    })
    $('#red-send').on('click', ({ target }) => {
      const nextElement = $(target).siblings()[0]
      $(nextElement).addClass('form__confirm-send--show')
    })
    $('#green-send').on('click', ({ target }) => {
      const nextElement = $(target).siblings()[0]
      $(nextElement).addClass('form__confirm-send--show')
    })
    $('#blue-send').on('click', ({ target }) => {
      const nextElement = $(target).siblings()[0]
      $(nextElement).addClass('form__confirm-send--show')
    })
  }
  private showHeader() {
    const headerAdmin = <HTMLElement>document.querySelector('.headerAdmin__bg')
    const footerAdmin = <HTMLElement>document.querySelector('.footerAdmin__bg')
    setTimeout(() => {
      headerAdmin.classList.add('headerAdmin__bg--active')
      footerAdmin.classList.add('footerAdmin__bg--active')
    }, 1000)
  }
  private animateNav() {
    const btnToggle = document.getElementById('btn-toggle')
    btnToggle?.addEventListener('click', ({ target }) => {
      ;(<HTMLButtonElement>target).classList.toggle(
        'headerAdmin__menu-button--active'
      )

      const dataToggle = <string>(
        (target as HTMLElement).getAttribute('data-toggle')
      )

      const navbarMobile = document.querySelector(dataToggle)
      navbarMobile?.classList.toggle('headerAdmin__menu-mobile--active')
    })
  }
}

new effects()
