class productsEffects {
  constructor() {
    this.hoverProduct()
  }
  hoverProduct() {
    const products = document.querySelectorAll('.items__around')
    products.forEach((product) => {
      _(product as HTMLElement).Event('mouseenter', ({ target }) => {
        ;(target as HTMLElement).classList.add('items__around--active')
      })
    })
  }
}
