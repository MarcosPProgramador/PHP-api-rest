interface productsPurchased {
  id: number
  name: string
  price: string
}
const productPurchased = `${path}api/productPurchased/`
function getElementsPurchasedProducts() {
  getContext<productsPurchased>(productPurchased, (products) => {
    const productItems = document.querySelectorAll(
      '#purchased-items .gallery__sidebar-product-item'
    )
    productItems.forEach((productItem) => {
      productItem.remove()
    })
    products.map((product, i) => {
      _('#purchased-items')
        .Child({
          Index: i,
          Element: 'div',
          Class: 'gallery__sidebar-product-item',
          Attribute: [{ Key: 'data-purchased-id', Value: String(product.id) }],
        })
        .Child({
          Element: 'div',
          Parent: '#purchased-items .gallery__sidebar-product-item',
          Class: 'gallery__sidebar-product-name-price',
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-name',
          Parent: '#purchased-items .gallery__sidebar-product-name-price',
          Content: product.name,
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-price',
          Parent: '#purchased-items .gallery__sidebar-product-name-price',
          Content: product.price,
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-trash',
          Parent: '#purchased-items .gallery__sidebar-product-item',
        })
        .Child({
          Element: 'button',
          Parent: '#purchased-items .gallery__sidebar-product-trash',
          Class: 'gallery__sidebar-button-trash',
        })
        .Child({
          Element: 'i',
          Class: ['fa', 'fa-trash'],
          Parent: '#purchased-items .gallery__sidebar-button-trash',
        })
    })

    const buttonsTrash = document.querySelectorAll(
      '.gallery__sidebar-button-trash'
    )

    buttonsTrash.forEach((buttonTrash) => {
      buttonTrash.addEventListener('click', ({ target }) => {
        const parent = (target as HTMLElement).parentElement?.parentElement
        const productId = parent?.getAttribute('data-purchased-id')

        __.ajax({
          url: `${path}api/productpurchased/`,
          method: 'DELETE',
          dataType: 'json',
          data: { productId: productId },
          success: (response) => {
            const sidebarProductItems = document.querySelectorAll(
              '.gallery__sidebar-product-item'
            )
            sidebarProductItems.forEach((sidebarProductItem) => {
              const id = (sidebarProductItem as HTMLElement).getAttribute(
                'data-purchased-id'
              )
              if (response.datas.DeletedId == id) {
                sidebarProductItem.remove()
              }
            })
          },
        })
      })
    })
  })
}
_('#button-get').Event('click', () => {
  getElementsPurchasedProducts()
})
