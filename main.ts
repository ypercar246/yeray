input.onButtonPressed(Button.A, function () {
    basic.showNumber(contador)
})
let contador = 0
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
contador = 0
basic.forever(function () {
    basic.pause(1000)
    contador += 1
})
