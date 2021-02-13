interface productName {
  product: string
  brand_id: string
}
interface usersMoney {
  status: string
  datas: { value: string }
}
interface datasJson {
  id: number
  product: string
  image: string
  price: string
}
interface datasJsonProductBrand {
  id: number
  brand: string
  product_id: string
}
interface ResponseJson<T> {
  status: string
  datas: [T]
}

ListFirstRequest()
function ListFirstRequest() {
  __.ajax({
    method: 'get',
    dataType: 'json',
    url: `${path}api/usersmoney/`,
    success: (response) => {
      if (response) {
        const money = <HTMLElement>document.querySelector('#money')
        money.textContent = String(response.datas.value)
      }
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
      url: `${path}api/usersmoney/`,
      success: (response) => {
        if (response) {
          const value = String(response.datas.value).split('.')
          if (value[1]) {
            const [n, nn] = value

            const txt = `${n}.${nn.slice(0, 2)}`

            money.textContent = txt
          } else {
            const [n] = value

            const txt = `${n}`

            money.textContent = txt
          }
        }
      },
    })
  })
  _('#loadmore').Event('click', () => {
    const items = $('.items__around').length
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    xhr.open('post', `${path}api/product`)

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    xhr.onloadstart = () => {
      _('#loading').css({ display: 'flex' })
    }


    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        _('#loading').css({ display: 'none' })
        const response: ResponseJson<datasJson> = xhr.response
        console.log(response)

        const datas = response.datas
        const items = $('.items__around').length
        if (datas) ListProducts(datas, items)
      }
    }
    xhr.send(`init=${items}&end=${10}`)
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
        Element: 'img',
        Attribute: [
          {
            Key: 'src',
            Value: `http://localhost/projetos/linguagens/PHP_api-rest/views/public/assets/uploads/${data.image}`,
          },
          { Key: 'alt', Value: data.product },
        ],
        Class: 'items__img',
        Parent: '.items__image-size',
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
  CreateProduct()
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
              if (response) {
                const price = String(response.datas.price).split('.')
                if (price[1]) {
                  const [n, nn] = price

                  const txt = `${n}.${nn.slice(0, 2)}`

                  money.textContent = txt
                } else {
                  if (response.datas.price) {
                    const txt = `${response.datas.price}`

                    money.textContent = txt
                  }
                }
              }
              const purchased = document.getElementById(
                'purchased-product-animate'
              )
              if (!(response.datas == 'error')) {
                purchased?.classList.remove('register-message__box--active')
                purchased?.classList.add('register-message__box--active')

                _('#purchased-product-animate').css({
                  borderColor: 'var(--blue)',
                })
                _('#purchased-product-animate span').css({
                  color: 'var(--blue)',
                })
                const children = purchased?.children[0] as HTMLSpanElement
                children.textContent = 'Purchased Product'
                const c = setTimeout(() => {
                  purchased?.classList.remove('register-message__box--active')
                }, 5000)
              } else {
                purchased?.classList.remove('register-message__box--active')
                purchased?.classList.add('register-message__box--active')

                _('#purchased-product-animate').css({
                  borderColor: 'red',
                })
                _('#purchased-product-animate span').css({
                  color: 'red',
                })
                const children = purchased?.children[0] as HTMLSpanElement
                children.textContent = 'You do not have money'

                const c = setTimeout(() => {
                  purchased?.classList.remove('register-message__box--active')
                }, 5000)
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

function CreateProduct() {
  getContext<productName>(`${path}api/productname`, (productsname) => {
    const productSelectOptions = document.querySelectorAll(
      '.product-select__option'
    )
    productSelectOptions.forEach((productSelectOption) => {
      productSelectOption.remove()
    })
    productsname.map((productname, i) => {
      _('#product-select').Child({
        Index: i,
        Element: 'option',
        Attribute: [{ Key: 'value', Value: productname.brand_id }],
        Class: 'product-select__option',
        Content: productname.product,
      })
    })
    const productSelect = <HTMLSelectElement>(
      document.getElementById('product-select')
    )
    requestProductbrand(productSelect.value)
    function requestProductbrand(brandId: string) {
      __.ajax({
        method: 'post',
        url: `${path}api/productbrand`,
        dataType: 'json',
        data: { brand_id: brandId },
        success: (response: ResponseJson<datasJsonProductBrand>) => {
          const productsBrand = response.datas
          const productSelectBrandOptions = document.querySelectorAll(
            '.product-select-brand__option'
          )

          productSelectBrandOptions.forEach((productSelectBrandOption) => {
            productSelectBrandOption.remove()
          })
          productsBrand.map((productBrand, i) => {
            _('#product-select-brand').Child({
              Element: 'option',
              Class: 'product-select-brand__option',
              Attribute: [{ Key: 'value', Value: String(productBrand.id) }],
              Content: productBrand.brand,
            })
          })
        },
      })
    }
    productSelect.addEventListener('change', () => {
      requestProductbrand(productSelect.value)
    })
    requestInsertProduct()
    function requestInsertProduct() {
      const registerProductButtonSend = document.getElementById(
        'register-product-button-send'
      )
      registerProductButtonSend?.addEventListener('click', () => {
        const productPrice = (document.getElementById(
          'price'
        ) as HTMLSelectElement).value

        if (productPrice && !isNaN(Number(productPrice))) {
          const form = <HTMLFormElement>(
            document.getElementById('register-product__form')
          )
          const formData = new FormData(form)
          const xhr = new XMLHttpRequest()
          xhr.responseType = 'json'
          xhr.open('POST', `${path}api/products`)
          xhr.send(formData)
          requestInsertCreatedProduct(formData)
        }
        function requestInsertCreatedProduct(formData: FormData) {
          const xhr = new XMLHttpRequest()

          xhr.responseType = 'json'

          xhr.open('POST', `${path}api/productcreated`)
          xhr.send(formData)
        }
      })
    }
  })
}
