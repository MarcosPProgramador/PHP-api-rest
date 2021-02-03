class productsEffects {
  constructor() {
    this.hoverProduct()
    this.showSidebar()
    this.hideSidebar()
  }
  hoverProduct() {
    const products = document.querySelectorAll('.items__around')
    products.forEach((product) => {
      _(product as HTMLElement).Event('mouseenter', ({ target }) => {
        ;(target as HTMLElement).classList.add('items__around--active')
      })
    })
  }
  showSidebar() {
    const buttonsOpen = document.querySelectorAll('[btnopen]')
    buttonsOpen.forEach((button) => {
      _(button as HTMLElement).Event('click', ({ target }) => {
        const id = <string>(target as HTMLElement).getAttribute('data-target')
        const sidebarBox = document.getElementById(id)

        sidebarBox?.classList.add('gallery__sidebar-box--active')
      })
    })
  }
  hideSidebar() {
    const buttonsClose = document.querySelectorAll('[btnclose]')
    buttonsClose.forEach((button) => {
      _(button as HTMLElement).Event('click', ({ target }) => {
        const id = <string>(target as HTMLElement).getAttribute('data-target')
        const sidebarBox = document.getElementById(id)

        sidebarBox?.classList.remove('gallery__sidebar-box--active')
      })
    })
  }
  buttonToggleProducts(id: string) {
    const buttons = document.querySelectorAll(id)
    buttons.forEach((button) => {
      _(button as HTMLElement).Event('click', ({ target }) => {
        const icon_1 = (target as HTMLElement).querySelectorAll(
          'i'
        )[0] as HTMLElement
        const icon_2 = (target as HTMLElement).querySelectorAll(
          'i'
        )[1] as HTMLElement
        const styleExistsIcon_1 = icon_1.getAttribute('style')

        if (styleExistsIcon_1) {
          icon_1.removeAttribute('style')
          _(icon_2).css({ display: 'none' })
        } else {
          icon_2.removeAttribute('style')
          _(icon_1).css({ display: 'none' })
        }
      })
    })
  }
}

class productsEffectsEnd {
  constructor() {
    this.buttonToggleProducts()
  }
  buttonToggleProducts() {
    const buttons = document.querySelectorAll('[btntoggle]')
    buttons.forEach((button) => {
      _(button as HTMLElement).Event('click', ({ target }) => {
        const icon_1 = (target as HTMLElement).querySelectorAll(
          'i'
        )[0] as HTMLElement
        const icon_2 = (target as HTMLElement).querySelectorAll(
          'i'
        )[1] as HTMLElement
        const styleExistsIcon_1 = icon_1.getAttribute('style')

        if (styleExistsIcon_1) {
          icon_1.removeAttribute('style')
          _(icon_2).css({ display: 'none' })
        } else {
          icon_2.removeAttribute('style')
          _(icon_1).css({ display: 'none' })
        }
      })
    })
  }
}
