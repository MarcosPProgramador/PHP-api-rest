class productsEffects {
  constructor() {
    this.hoverProduct()
    this.showSidebar()
    this.hideSidebar()
    this.showForm()
  }
  private showForm() {
    $('.items__product-button-0').each((i, productButton) => {
      $(productButton).on('click', () => {
        _('#register-product').css({ display: 'block' })
      })
    })
    $('.register-product--close').each((i, buttonClose) => {
      $(buttonClose).on('click', (e) => {
        if (e.target.classList.contains('register-product--close')) {
          e.stopPropagation()
          _('#register-product').css({ display: 'none' })
        }
      })
    })
  }
  private hoverProduct() {
    const products = document.querySelectorAll('.items__around')
    products.forEach((product) => {
      _(product as HTMLElement).Event('mouseenter', ({ target }) => {
        ;(target as HTMLElement).classList.add('items__around--active')
      })
    })
  }
  private showSidebar() {
    const buttonsOpen = document.querySelectorAll('[btnopen]')
    buttonsOpen.forEach((button) => {
      _(button as HTMLElement).Event('click', ({ target }) => {
        const id = <string>(target as HTMLElement).getAttribute('data-target')
        const sidebarBox = document.getElementById(id)

        sidebarBox?.classList.add('gallery__sidebar-box--active')
      })
    })
  }
  private hideSidebar() {
    const buttonsClose = document.querySelectorAll('[btnclose]')
    buttonsClose.forEach((button) => {
      _(button as HTMLElement).Event('click', ({ target }) => {
        const id = <string>(target as HTMLElement).getAttribute('data-target')
        const sidebarBox = document.getElementById(id)

        sidebarBox?.classList.remove('gallery__sidebar-box--active')
      })
    })
  }
  public buttonToggleProducts(queryId: string) {
    const buttons = document.querySelectorAll(queryId)
    buttons.forEach((button) => {
      _(button as HTMLElement).Event('click', ({ target }) => {
        const icon_1 = (target as HTMLElement).querySelectorAll(
          'i'
        )[0] as HTMLElement
        const icon_2 = (target as HTMLElement).querySelectorAll(
          'i'
        )[1] as HTMLElement
        const styleExistsIcon_1 = icon_1.getAttribute('style')

        const parent = <string>(
          (target as HTMLElement).getAttribute('data-parent')
        )
        const productId = (<HTMLElement>(
          document.getElementById(parent)
        )).getAttribute('data-target')

        if (styleExistsIcon_1) {
          icon_1.removeAttribute('style')
          _(icon_2).css({ display: 'none' })

          const condition = (target as HTMLElement)
            .getAttribute('class')
            ?.split(' ')[2]
          if (condition === 'items__product-favorite') {
            __.ajax({
              method: 'POST',
              dataType: 'json',
              data: { id: productId },
              url: `${path}api/productfavorites/`,
              success: (response) => {
                getElementsFavoritesProducts()
              },
            })
          }
        } else {
          icon_2.removeAttribute('style')
          _(icon_1).css({ display: 'none' })
        }
      })
    })
  }
}
