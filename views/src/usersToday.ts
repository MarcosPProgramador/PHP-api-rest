

interface UsersToday {
  id: string
  name: string
  ip: string
}
class usersToday {
  private usersTodayString: string

  constructor() {
    this.usersTodayString = `${path}api/usersToday`
    this.requestAjaxUsersTodayGet()
  }

  requestAjaxUsersTodayGet() {
    const _this = this
    $.ajax({
      method: 'get',
      url: this.usersTodayString,
      dataType: 'json',
      success: function () {
        _this.getUsersToday()
      },
    })
  }

  getUsersToday() {
    getContext<UsersToday>(this.usersTodayString, (users) => {
      const len = users.length != undefined ? users.length : 0
      $('#count-green').text(len)

      if (Array.isArray(users)) {
        $('.admin__users-today-info-controls#green-none').removeClass(
          'admin__users-today-info-controls--disabled'
        )
        $('#count-green ~ .admin__button-more').removeClass(
          'admin__button-more--disabled'
        )
        $('#count-green').removeClass('count--disabled')
        $('.green .admin__user-today').remove()

        $.map(users, (user, i) => {
          _('.green')
            .Child({
              Index: i,
              Class: 'admin__user-today',
              Element: 'div',
            })
            .Child({
              Class: 'admin__image-name',
              Parent: '.green .admin__user-today',
              Element: 'div',
            })
            .Child({
              Parent: '.green  .admin__image-name',
              Class: 'admin__image',
              Element: 'div',
            })
            .Child({
              Parent: '.green  .admin__image-name',
              Class: 'admin__name',
              Element: 'div',
            })
            .Child({
              Parent: '.green  .admin__name',
              Class: 'name',
              Element: 'span',
              Content: user.name,
            })
            .Child({
              Parent: '.green  .admin__user-today',
              Class: 'admin__configs',
              Element: 'div',
            })
            .Child({
              Parent: '.green  .admin__configs',
              Class: 'admin__ip',
              Element: 'div',
            })
            .Child({
              Parent: '.green  .admin__ip',
              Class: 'ip',
              Element: 'span',
              Content: user.ip,
            })
            .Child({
              Parent: '.green  .admin__configs',
              Class: 'admin__config',
              Element: 'button',
            })
            .Child({
              Parent: '.green  .admin__configs',
              Class: 'admin__config-open',
              Element: 'div',
            })
            .Child({
              Parent: '.green  .admin__config-open',
              Class: [
                'admin__config-open-child',
                'admin__config-open-child---delete',
              ],

              Element: 'button',
              Attribute: [{ Key: 'data-user-Today', Value: user.id }],
              Content: 'Delete',
            })
            .Child({
              Parent: '.green  .admin__config-open',
              Class: [
                'admin__config-open-child',
                'admin__config-open-child---update',
              ],
              Attribute: [
                { Key: 'open-form', Value: '#fadeout-green' },
                { Key: 'data-user-Today-update', Value: user.id },
                { Key: 'data-user-ip-update', Value: user.ip },
                { Key: 'data-user-name-update', Value: user.name },
              ],
              Element: 'button',
              Content: 'Update',
            })
            .Child({
              Parent: '.green  .admin__config',
              Class: 'admin__bollet',
              Element: 'span',
            })
            .Child({
              Parent: '.green  .admin__config',
              Class: 'admin__bollet',
              Element: 'span',
            })
            .Child({
              Parent: '.green  .admin__config',
              Class: 'admin__bollet',
              Element: 'span',
            })
        })
        $('.green  .admin__config').each((index, element) => {
          $(element).on('click', ({ target }) => {
            const brother = $(target).siblings()[1]
            $(brother).toggleClass('admin__config-open--active')
          })
        })
        this.deleteUserToday()
        this.putUserToday()
      } else {
        $('.admin__users-today-info-controls#green-none').addClass(
          'admin__users-today-info-controls--disabled'
        )
        $('#count-green ~ .admin__button-more').addClass(
          'admin__button-more--disabled'
        )
        $('#count-green').addClass('count--disabled')
      }
    })
  }

  deleteUserToday() {
    $('.admin__config-open-child---delete').each((i, element) => {
      $(element).on('click', ({ target }) => {
        const dataUserToday = <string>$(target).attr('data-user-Today')
        this.requestAjaxUsersTodayDelete(dataUserToday)
      })
    })
  }
  requestAjaxUsersTodayDelete(dataUserToday: string) {
    const _this = this
    $.ajax({
      method: 'delete',
      url: this.usersTodayString,
      dataType: 'json',
      data: { id: dataUserToday },
      success: function () {
        $('.green .admin__user-today').remove()
        _this.requestAjaxUsersTodayGet()
      },
    })
  }
  putUserToday() {
    $('.admin__config-open-child---update').each((i, element) => {
      $(element).on('click', ({ target }) => {
        const dataUserNameUpdate = <string>(
          $(target).attr('data-user-name-update')
        )
        const dataUserIPUpdate = <string>$(target).attr('data-user-ip-update')
        const dataUserIDUpdate = <string>(
          $(target).attr('data-user-Today-update')
        )

        const id = <string>$(target).attr('open-form')
        $(id).addClass('admin__fixed-form-update--show')

        $('.form__input-name-green input').val(dataUserNameUpdate)
        $('.form__input-ip-green input').val(dataUserIPUpdate)
        $('.form__input-ip-green').attr('data-idgreen', dataUserIDUpdate)

        $('#green-yes').on('click', () => {
          const inputName = <string>$('.form__input-name-green input').val()
          const inputIp = <string>$('.form__input-ip-green input').val()
          const inputId = <string>(
            $('.form__input-ip-green').attr('data-idgreen')
          )

          this.requestAjaxUsersTodayPut(inputId, inputName, inputIp)
        })
      })
    })
  }
  requestAjaxUsersTodayPut(
    dataUserIDUpdate: string,
    inputName: string,
    inputIp: string
  ) {
    const _this = this
    $.ajax({
      method: 'put',
      url: this.usersTodayString,
      dataType: 'json',
      data: { id: dataUserIDUpdate, name: inputName, ip: inputIp },
      success: function () {
        _this.requestAjaxUsersTodayGet()
      },
    })
  }
}
new usersToday()
