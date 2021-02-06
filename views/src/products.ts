interface usersMoney {
  status: string
  datas: { value: string }
}
interface datasJson {
  id: number
  product: string
  price: string
}
interface ResponseJson<T> {
  status: string
  datas: [T]
}


ListFirstRequest()
function ListFirstRequest() {
  __.ajax({
    method: 'PUT',
    dataType: 'json',
    data: { value: 0 },
    url: `${path}api/usersmoney/`,
    success: (response) => {
      const money = <HTMLElement>document.querySelector('#money')
      money.textContent = String(response.datas.value)
    },
  })
  __.ajax({
    url: `${path}api/products`,
    method: 'get',
    dataType: 'json',
    beforeSend: function () {
      _('#loading').css({ display: 'flex' })
    },
    success: function (response: ResponseJson<datasJson>) {
      const datas = response.datas
      _('#loading').css({ display: 'none' })
      ListProducts(datas)
    },
  })
}
eventsRequest()
function eventsRequest() {
  _('#addmoney').Event('click', ({ target }) => {
    const idmoney = <string>(target as HTMLElement).getAttribute('data-money')

    const money = <HTMLElement>document.querySelector(idmoney)
    __.ajax({
      method: 'PUT',
      dataType: 'json',
      data: { value: 200 },
      url: `${path}api/usersmoney/`,
      success: (response) => {
        const [n, nn] = String(response.datas.value).split('.')
        const txt = `${n}.${nn.slice(0, 2)}`

        money.textContent = txt
      },
    })
  })
  _('#loadmore').Event('click', () => {
    const items = $('.items__around').length

    __.ajax({
      url: `${path}api/products`,
      method: 'post',
      data: { init: items, end: 10 },
      dataType: 'json',
      beforeSend: function () {
        _('#loading').css({ display: 'flex' })
      },
      success: function (response: ResponseJson<datasJson>) {
        _('#loading').css({ display: 'none' })

        const datas = response.datas
        const items = $('.items__around').length

        ListProducts(datas, items)
      },
    })
  })
}

function ListProducts(datas: [datasJson], items?: number) {
  const customClass = (items?: number) =>
    items ? 'items__around--active' : 'items__around--no'

  datas.map((data, i) => {
    _('#products')
      .Child({
        Index: i + Number(`${items != undefined ? items : 0}`),
        Element: 'div',
        Class: ['items__around', `${customClass(items)}`],
        Attribute: [
          { Key: 'data-target', Value: String(data.id) },
          { Key: 'id', Value: 'product-' + String(data.id) },
        ],
      })
      .Child({
        Element: 'div',
        Class: 'items__container-img',
        Parent: '.items__around',
      })
      .Child({
        Element: 'div',
        Class: 'items__image-size',
        Parent: '.items__container-img',
      })
      .Child({
        Element: 'div',
        Class: 'items__data-info',
        Parent: '.items__around',
      })
      .Child({
        Element: 'div',
        Class: 'items__product-datas',
        Parent: '.items__data-info',
      })
      .Child({
        Element: 'div',
        Class: [
          'items__product-animate',
          'a1',
          'items__product-data',
          'items__product-name',
        ],
        Content: data.product,
        Parent: '.items__product-datas',
      })
      .Child({
        Element: 'button',
        Class: [
          'items__product-animate',
          'a2',
          'items__product-data',
          'items__product-price',
        ],
        Content: data.price,
        Attribute: [
          { Key: 'data-parent', Value: 'product-' + String(data.id) },
        ],
        Parent: '.items__product-datas',
      })
      .Child({
        Element: 'div',
        Class: 'items__product-controls',
        Parent: '.items__data-info',
      })
      .Child({
        Element: 'button',
        Class: [
          'items__product-animate',
          'a3',
          'items__product-create',
          'items__product-button-0',
        ],
        Parent: '.items__product-controls',
      })
      .Child({
        Element: 'i',
        Class: ['fa', 'fa-plus'],
        Parent: '.items__product-create',
      })
      .Child({
        Element: 'button',
        Class: [
          'items__product-animate',
          'a4',
          'items__product-buy',
          'items__product-button-1',
        ],

        Attribute: [
          {
            Key: `${items != undefined ? 'btntoggleinit' : 'btntoggle'}`,
            Value: '',
          },

          { Key: 'data-parent', Value: 'product-' + String(data.id) },
        ],
        Parent: '.items__product-controls',
      })
      .Child({
        Element: 'i',
        Class: ['fa', 'fa-bookmark'],
        Attribute: [{ Key: 'style', Value: 'display: none;' }],
        Parent: '.items__product-buy',
      })
      .Child({
        Element: 'i',
        Class: ['fa', 'fa-bookmark-o'],
        Parent: '.items__product-buy',
      })
      .Child({
        Element: 'button',
        Class: [
          'items__product-animate',
          'a5',
          'items__product-favorite',
          'items__product-button-2',
        ],
        Attribute: [
          {
            Key: `${items != undefined ? 'btntoggleinit' : 'btntoggle'}`,
            Value: '',
          },
          { Key: 'data-parent', Value: 'product-' + String(data.id) },
        ],
        Parent: '.items__product-controls',
      })
      .Child({
        Element: 'i',
        Class: ['fa', 'fa-heart'],
        Attribute: [{ Key: 'style', Value: 'display: none;' }],
        Parent: '.items__product-favorite',
      })
      .Child({
        Element: 'i',
        Class: ['fa', 'fa-heart-o'],

        Parent: '.items__product-favorite',
      })
  })
  Alerts()
  const classProductsEffects = new productsEffects()
  if (items) {
    classProductsEffects.buttonToggleProducts('[btntoggleinit]')
  } else {
    classProductsEffects.buttonToggleProducts('[btntoggle]')
  }
}

function removeAlert() {
  const alerts = document.querySelectorAll('.alert')
  alerts.forEach((alert) => {
    alert.remove()
  })
}
function Alerts() {
  const prices = document.querySelectorAll(
    '.items__product-data.items__product-price'
  )
  prices.forEach((price) => {
    _(price as HTMLElement).Event('click', ({ target }) => {
      const parentId = <string>(
        (target as HTMLElement).getAttribute('data-parent')
      )

      removeAlert()
      _(`#${parentId} .items__image-size`)
        .Child({
          Element: 'div',
          Class: 'alert',
        })
        // container
        .Child({
          Element: 'div',
          Class: 'alert__container',
          Parent: '.alert',
        })
        // top
        .Child({
          Element: 'div',
          Class: 'alert__container-top',
          Parent: '.alert__container',
        })
        .Child({
          Element: 'h2',
          Class: 'alert__title',
          Parent: '.alert__container-top',
          Content: 'Really want to buy this product?',
        })

        // bottom
        .Child({
          Element: 'div',
          Class: 'alert__container-bottom',
          Parent: '.alert__container',
        })
        .Child({
          Element: 'button',
          Class: ['alert__button', 'alert__button-01'],
          Attribute: [{ Key: 'data-parent', Value: parentId }],
          Parent: '.alert__container-bottom',
          Content: 'Yes',
        })
        .Child({
          Element: 'button',
          Class: ['alert__button', 'alert__button-02'],
          Parent: '.alert__container-bottom',
          Content: 'No',
        })
      $('.alert__button-01').each((i, button) => {
        $(button).on('click', ({ target }) => {
          const parentid = $(target).attr('data-parent')
          const parent = <HTMLElement>document.querySelector(`#${parentid}`)
          const targetid = parent.getAttribute('data-target')

          __.ajax({
            method: 'POST',
            dataType: 'json',
            data: { id: targetid },
            url: `${path}api/productpurchased`,
            success: (response) => {
              const money = <HTMLElement>document.getElementById('money')
              if (response.datas.price) {
                const [n, nn] = String(response.datas.price).split('.')
                const txt = `${n}.${nn.slice(0, 2)}`

                money.textContent = txt
              }
            },
          })
          removeAlert()
        })
      })
      $('.alert__button-02').each((i, button) => {
        $(button).on('click', () => {
          removeAlert()
        })
      })
    })
  })
}
