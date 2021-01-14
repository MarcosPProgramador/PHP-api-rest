const path = 'http://localhost/projetos/linguagens/PHP_api-rest/'
interface Attribute {
  Key: string
  Value: string
}
interface Elements {
  Element: string
  Class: string | string[]
  Index?: number
  Parent?: string
  Content?: string
  Attribute?: [
    Attribute,
    Attribute?,
    Attribute?,
    Attribute?,
    Attribute?,
    Attribute?,
    Attribute?
  ]
}
type ApiRest<N> = {
  status: string
  datas: [N]
}
type Fn<T> = (datas: [T]) => void

async function getContext<T>(api: string, callbackFn: Fn<T>) {
  try {
    const response = await fetch(api),
      ApiRestDatas = <ApiRest<T>>await response.json()

    if (ApiRestDatas.status == 'error') throw ApiRestDatas.datas
    else {
      callbackFn(ApiRestDatas.datas)
      return
    }
  } catch (error) {
    console.error(error)
    return
  }
}
function _(Elm: string) {
  const Query = (Element: string) => {
    return <HTMLElement>document.querySelector(Element)
  }
  const Querys = (Element: string, Index: number) => {
    return document.querySelectorAll(Element)[Index]
  }

  let _index = 0
  const Child = ({
    Element,
    Index,
    Parent,
    Class,
    Content,
    Attribute,
  }: Elements) => {
    _index = Index != undefined ? Index : _index

    const _child = document.createElement(Element)

    if (Array.isArray(Class)) {
      $.map(Class, (e) => {
        _child.classList.add(e)
      })
    } else _child.classList.add(Class)

    if (Attribute) {
      $.map(Attribute, (Atrr) => {
        if (Atrr) {
          _child.setAttribute(Atrr.Key, Atrr.Value)
        }
      })
    }
    if (Content) _child.textContent = Content

    if (!Parent) Query(Elm).appendChild(_child)
    else Querys(Parent, _index).appendChild(_child)

    return { Child }
  }

  return { Child }
}
