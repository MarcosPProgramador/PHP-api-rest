updateUser()
function updateUser() {
  timeUpdate()
  const timeUpdateUser = 40000
  function timeUpdate() {
    setTimeout(() => {
      timeBrother()
      __.ajax({
        url: `${path}api/user`,
        method: 'put',
        dataType: 'json',
        success: (response) => {},
      })
    }, timeUpdateUser)
  }
  function timeBrother() {
    setTimeout(timeUpdate, timeUpdateUser)
  }
}
