interface usersMoney {
  status: string
  datas: { value: string }
}
async function put<T>(rsc: string, callbackFn: (datas: T) => void) {
  const resource = rsc.toLowerCase()
  const [endpoint, body] = resource.split('?')

  const response = await fetch(
    `http://localhost/projetos/linguagens/PHP_api-rest${endpoint}`,
    {
      method: 'PUT',
      body: body,
      mode: 'cors',
    }
  )
  const datas = <T>await response.json()

  callbackFn(datas)
}

put<usersMoney>(`/api/usersmoney?value=0`, (json) => {
  const money = <HTMLElement>document.querySelector('#money')
  money.textContent = String(json.datas.value)
})

_('#addmoney').Event('click', ({ target }) => {
  const idmoney = <string>(target as HTMLElement).getAttribute('data-money')

  const money = <HTMLElement>document.querySelector(idmoney)

  put<usersMoney>(`/api/usersmoney?value=200`, (json) => {
    money.textContent = String(json.datas.value)
  })
})

interface datasJson {
  id: number
  product: string
  price: string
}
interface ResponseJson<T> {
  status: string
  datas: [T]
}
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

    datas.map((data, i) => {
      _('#products')
        .Child({
          Index: i,
          Element: 'div',
          Class: ['items__around'],
          Attribute: [{ Key: 'data-target', Value: String(data.id) }],
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
          Parent: '.items__product-datas',
        })
        .Child({
          Element: 'div',
          Class: 'items__product-controls',
          Parent: '.items__data-info',
        })
        .Child({
          Element: 'button',
          Class: ['items__product-animate', 'a3', 'items__product-create'],
          Parent: '.items__product-controls',
        })
        .Child({
          Element: 'i',
          Class: ['fa', 'fa-plus'],
          Parent: '.items__product-create',
        })
        .Child({
          Element: 'button',
          Class: ['items__product-animate', 'a4', 'items__product-buy'],
          Attribute: [{ Key: 'btntoggleinit', Value: '' }],
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
          Class: ['items__product-animate', 'a5', 'items__product-favorite'],
          Attribute: [{ Key: 'btntoggleinit', Value: '' }],
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

    const classProductsEffetcs = new productsEffects()
    classProductsEffetcs.buttonToggleProducts('[btntoggleinit]')
  },
})

$('#loadmore').on('click', () => {
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

      datas.map((data, i) => {
        _('#products')
          .Child({
            Index: i + items,
            Element: 'div',
            Class: ['items__around', 'items__around--active'],
            Attribute: [{ Key: 'data-target', Value: String(data.id) }],
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
            Parent: '.items__product-datas',
          })
          .Child({
            Element: 'div',
            Class: 'items__product-controls',
            Parent: '.items__data-info',
          })
          .Child({
            Element: 'button',
            Class: ['items__product-animate', 'a3', 'items__product-create'],
            Attribute: [{ Key: 'btnopen', Value: '' }],
            Parent: '.items__product-controls',
          })
          .Child({
            Element: 'i',
            Class: ['fa', 'fa-plus'],
            Parent: '.items__product-create',
          })
          .Child({
            Element: 'button',
            Class: ['items__product-animate', 'a4', 'items__product-buy'],
            Attribute: [{ Key: 'btntoggle', Value: '' }],
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
            Class: ['items__product-animate', 'a5', 'items__product-favorite'],
            Attribute: [{ Key: 'btntoggle', Value: '' }],
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

      new productsEffectsEnd()
    },
  })
})
