interface UsersOnline {
  id: string
  name: string
  ip: string
}
class usersOnline {
  private usersOnlineString: string

  constructor() {
    this.usersOnlineString = `${path}api/usersOnline`
    this.requestAjaxUsersOnlineGet()
  }

  requestAjaxUsersOnlineGet() {
    const _this = this
    $.ajax({
      method: 'get',
      url: this.usersOnlineString,
      dataType: 'json',
      success: function () {
        _this.getUsersOnline()
      },
    })
  }

  getUsersOnline() {
    getContext<UsersOnline>(this.usersOnlineString, (users) => {
      const len = users.length != undefined ? users.length : 0
      $('#count-blue').text(len)

      if (Array.isArray(users)) {
        $('.admin__users-today-info-controls#blue-none').removeClass(
          'admin__users-today-info-controls--disabled'
        )
        $('#count-blue ~ .admin__button-more').removeClass(
          'admin__button-more--disabled'
        )
        $('#count-blue').removeClass('count--disabled')
        $('.blue .admin__user-today').remove()

        $.map(users, (user, i) => {
          _('.blue')
            .Child({
              Index: i,
              Class: 'admin__user-today',
              Element: 'div',
            })
            .Child({
              Class: 'admin__image-name',
              Parent: '.blue .admin__user-today',
              Element: 'div',
            })
            .Child({
              Parent: '.blue  .admin__image-name',
              Class: 'admin__image',
              Element: 'div',
            })
            .Child({
              Parent: '.blue  .admin__image-name',
              Class: 'admin__name',
              Element: 'div',
            })
            .Child({
              Parent: '.blue  .admin__name',
              Class: 'name',
              Element: 'span',
              Content: user.name,
            })
            .Child({
              Parent: '.blue  .admin__user-today',
              Class: 'admin__configs',
              Element: 'div',
            })
            .Child({
              Parent: '.blue  .admin__configs',
              Class: 'admin__ip',
              Element: 'div',
            })
            .Child({
              Parent: '.blue  .admin__ip',
              Class: 'ip',
              Element: 'span',
              Content: user.ip,
            })
            .Child({
              Parent: '.blue  .admin__configs',
              Class: 'admin__config',
              Element: 'button',
            })
            .Child({
              Parent: '.blue  .admin__configs',
              Class: 'admin__config-open',
              Element: 'div',
            })
            .Child({
              Parent: '.blue  .admin__config-open',
              Class: [
                'admin__config-open-child',
                'admin__config-open-child---delete',
              ],

              Element: 'button',
              Attribute: [{ Key: 'data-user-Online', Value: user.id }],
              Content: 'Delete',
            })
            .Child({
              Parent: '.blue  .admin__config-open',
              Class: [
                'admin__config-open-child',
                'admin__config-open-child---update',
              ],
              Attribute: [
                { Key: 'open-form', Value: '#fadeout-blue' },
                { Key: 'data-user-Online-update', Value: user.id },
                { Key: 'data-user-ip-update', Value: user.ip },
                { Key: 'data-user-name-update', Value: user.name },
              ],
              Element: 'button',
              Content: 'Update',
            })
            .Child({
              Parent: '.blue  .admin__config',
              Class: 'admin__bollet',
              Element: 'span',
            })
            .Child({
              Parent: '.blue  .admin__config',
              Class: 'admin__bollet',
              Element: 'span',
            })
            .Child({
              Parent: '.blue  .admin__config',
              Class: 'admin__bollet',
              Element: 'span',
            })
        })
        $('.blue  .admin__config').each((index, element) => {
          $(element).on('click', ({ target }) => {
            const brother = $(target).siblings()[1]
            $(brother).toggleClass('admin__config-open--active')
          })
        })
        this.deleteUserOnline()
        this.putUserOnline()
      } else {
        $('.admin__users-today-info-controls#blue-none').addClass(
          'admin__users-today-info-controls--disabled'
        )
        $('#count-blue ~ .admin__button-more').addClass(
          'admin__button-more--disabled'
        )
        $('#count-blue').addClass('count--disabled')
      }
    })
  }

  deleteUserOnline() {
    $('.admin__config-open-child---delete').each((i, element) => {
      $(element).on('click', ({ target }) => {
        const dataUserOnline = <string>$(target).attr('data-user-Online')
        this.requestAjaxUsersOnlineDelete(dataUserOnline)
      })
    })
  }
  requestAjaxUsersOnlineDelete(dataUserOnline: string) {
    const _this = this
    $.ajax({
      method: 'delete',
      url: this.usersOnlineString,
      dataType: 'json',
      data: { id: dataUserOnline },
      success: function () {
        $('.blue .admin__user-today').remove()
        _this.requestAjaxUsersOnlineGet()
      },
    })
  }
  putUserOnline() {
    $('.admin__config-open-child---update').each((i, element) => {
      $(element).on('click', ({ target }) => {
        const dataUserNameUpdate = <string>(
          $(target).attr('data-user-name-update')
        )
        const dataUserIPUpdate = <string>$(target).attr('data-user-ip-update')
        const dataUserIDUpdate = <string>(
          $(target).attr('data-user-Online-update')
        )

        const id = <string>$(target).attr('open-form')
        $(id).addClass('admin__fixed-form-update--show')

        $('.form__input-name-blue input').val(dataUserNameUpdate)
        $('.form__input-ip-blue input').val(dataUserIPUpdate)
        $('.form__input-ip-blue').attr('data-idblue', dataUserIDUpdate)

        $('#blue-yes').on('click', () => {
          const inputName = <string>$('.form__input-name-blue input').val()
          const inputIp = <string>$('.form__input-ip-blue input').val()
          const inputId = <string>$('.form__input-ip-blue').attr('data-idblue')

          this.requestAjaxUsersOnlinePut(inputId, inputName, inputIp)
        })
      })
    })
  }
  requestAjaxUsersOnlinePut(
    inputId: string,
    inputName: string,
    inputIp: string
  ) {
    const _this = this
    $.ajax({
      method: 'put',
      url: this.usersOnlineString,
      dataType: 'json',
      data: { id: inputId, name: inputName, ip: inputIp },
      success: function () {
        _this.requestAjaxUsersOnlineGet()
      },
    })
  }
}
new usersOnline()
