interface productsFavorites {
  id: number
  name: string
  price: string
}
const productFavorites = `${path}api/productfavorites/`
function getElementsFavoritesProducts() {
  const sidebarProductItems = document.querySelectorAll(
    '.gallery__sidebar-product-item'
  )
  sidebarProductItems.forEach((sidebarProductItem) => {
    sidebarProductItem.remove()
  })
  getContext<productsFavorites>(productFavorites, (products) => {
    products.map((product, i) => {
      _('#favorites-items')
        .Child({
          Index: i,
          Element: 'div',
          Class: 'gallery__sidebar-product-item',
          Attribute: [{ Key: 'data-favorite-id', Value: String(product.id) }],
        })
        .Child({
          Element: 'div',
          Parent: '#favorites-items .gallery__sidebar-product-item',
          Class: 'gallery__sidebar-product-name-price',
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-name',
          Parent: '#favorites-items .gallery__sidebar-product-name-price',
          Content: product.name,
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-price',
          Parent: '#favorites-items .gallery__sidebar-product-name-price',
          Content: product.price,
        })
        .Child({
          Element: 'div',
          Class: 'gallery__sidebar-product-trash',
          Parent: '#favorites-items .gallery__sidebar-product-item',
        })
        .Child({
          Element: 'button',
          Parent: '#favorites-items .gallery__sidebar-product-trash',
          Class: 'gallery__sidebar-button-trash',
        })
        .Child({
          Element: 'i',
          Class: ['fa', 'fa-trash'],
          Parent: '#favorites-items .gallery__sidebar-button-trash',
        })
    })
    const buttonsTrash = document.querySelectorAll(
      '.gallery__sidebar-button-trash'
    )

    buttonsTrash.forEach((buttonTrash) => {
      buttonTrash.addEventListener('click', ({ target }) => {
        const parent = (target as HTMLElement).parentElement?.parentElement
        const productId = parent?.getAttribute('data-favorite-id')

        __.ajax({
          url: `${path}api/productfavorites/`,
          method: 'DELETE',
          dataType: 'json',
          data: { productId: productId },
          success: (response) => {
            const sidebarProductItems = document.querySelectorAll(
              '.gallery__sidebar-product-item'
            )
            sidebarProductItems.forEach((sidebarProductItem) => {
              const id = (sidebarProductItem as HTMLElement).getAttribute(
                'data-favorite-id'
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
getElementsFavoritesProducts()
