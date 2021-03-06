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
interface datasAjax {
  method: string
  dataType: 'json'
  url: string
  data?: any
  beforeSend?: () => void
  success: (datas: any) => void
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
function _(Elm: string | HTMLElement) {
  const Query = (Element: string) => {
    return <HTMLElement>document.querySelector(Element)
  }
  const Querys = (Element: string, Index: number) => {
    return document.querySelectorAll(Element)[Index]
  }
  const Toggle = (cls: string) => {
    ;(Elm as HTMLElement).classList.toggle(cls)
  }
  const Content = (content: string) => {
    if (typeof Elm == 'string') {
      Query(<string>Elm).textContent = content
    } else {
      Elm.textContent = content
    }
  }
  type events =
    | 'click'
    | 'mouseenter'
    | 'hover'
    | 'change'
    | 'focus'
    | 'keyup'
    | 'keypress'
    | 'keydown'
    | 'blur'
  const Event = (
    eventStr: events,
    callbackFn: (ev: Event | MouseEvent | FocusEvent | KeyboardEvent) => void
  ) => {
    if (typeof Elm == 'string') {
      Query(Elm as string).addEventListener(eventStr, callbackFn)
    } else {
      Elm.addEventListener(eventStr, callbackFn)
    }
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

    if (!Parent) Query(Elm as string).appendChild(_child)
    else Querys(Parent, _index).appendChild(_child)

    return { Child }
  }
  const css = (style: { [key: string]: string }) => {
    for (const skey in style) {
      const key = skey.replace(/([A-Z])/, '-$1').toLowerCase()
      const value = style[skey]

      if (typeof Elm === 'string') {
        Query(Elm).style.setProperty(key, value)
      } else {
        Elm.style.setProperty(key, value)
      }
    }
  }

  return { Child, Event, Content, Toggle, css }
}

const __ = {
  ajax({ dataType, method, url, beforeSend, success, data }: datasAjax) {
    const xhr = new XMLHttpRequest()

    xhr.responseType = dataType

    xhr.open(method, url, true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    if (beforeSend) xhr.onloadstart = beforeSend
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) success(xhr.response)
    }

    if (method != 'get') {
      let dataStr = ''
      for (const key in data) {
        dataStr += `${key}=${data[key]}&`
      }

      xhr.send(dataStr.slice(0, -1))
    } else xhr.send()
  },
}
