class loginEffects {
  constructor() {
    this.activeCircleN()
    this.activeCircleNN()
  }
  activeCircleN() {
    const circleN = document.querySelector('#circleN')
    setTimeout(() => {
      circleN?.classList.add('background-bg__circle--active')
    }, 1000)
  }
  activeCircleNN() {
    const circleNN = document.querySelector('#circleNN')
    setTimeout(() => {
      circleNN?.classList.add('background-bg__circle--active')
    }, 3000)
  }
}
new loginEffects()
