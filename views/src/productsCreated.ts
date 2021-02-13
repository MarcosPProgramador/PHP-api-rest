interface productsCreated {
  id: number
  name: string
  price: string
}
const productCreated =
  'http://localhost/projetos/linguagens/PHP_api-rest/api/productcreated/'
function getElementsCreatedProducts() {
  getContext<productsCreated>(productCreated, (products) => {
    const items = document.querySelectorAll(
      ' #created-items .gallery__sidebar-product-item'
    )
    items.forEach((item) => {
      item.remove()
    })
    products.map((product, i) => {
      _('#created-items')
        .Child({
          Index: i,
          Element: 'div',
          Class: 'gallery__sidebar-product-item',
          Attribute: [{ Key: 'data-target-id', Value: String(product.id) }],
        })
        .Child({
          Element: 'div',
          Parent: '#created-items .gallery__sidebar-product-item',
          Class: 'gallery__sidebar-product-name-price',
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-name',
          Parent: '#created-items .gallery__sidebar-product-name-price',
          Content: product.name,
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-price',
          Parent: '#created-items .gallery__sidebar-product-name-price',
          Content: product.price,
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-trash',
          Parent: '#created-items .gallery__sidebar-product-item',
        })
        .Child({
          Element: 'button',
          Parent: '#created-items .gallery__sidebar-product-trash',
          Class: 'gallery__sidebar-button-trash',
        })
        .Child({
          Element: 'i',
          Class: ['fa', 'fa-trash'],
          Parent: '#created-items .gallery__sidebar-button-trash',
        })
    })
    const buttonsTrash = document.querySelectorAll(
      '.gallery__sidebar-button-trash'
    )

    buttonsTrash.forEach((buttonTrash) => {
      buttonTrash.addEventListener('click', ({ target }) => {
        const parent = (target as HTMLElement).parentElement?.parentElement
        const productId = parent?.getAttribute('data-target-id')

        __.ajax({
          url: `${path}api/productcreated/`,
          method: 'DELETE',
          dataType: 'json',
          data: { productId: productId },
          success: (response) => {
            const sidebarProductItems = document.querySelectorAll(
              '.gallery__sidebar-product-item'
            )
            sidebarProductItems.forEach((sidebarProductItem) => {
              const id = (sidebarProductItem as HTMLElement).getAttribute(
                'data-target-id'
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
const buttonGetCreated = document.getElementById('button-get-created')
buttonGetCreated?.addEventListener('click', () => {
  getElementsCreatedProducts()
})
