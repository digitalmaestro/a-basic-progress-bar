input.onButtonPressed(Button.A, function () {
    while (counter <= totalCount) {
        if (counter == unit * ledCounter) {
            led.plot(xledplot, 2)
            xledplot += 1
            ledCounter += 1
        }
        if (counter <= unit * ledCounter) {
            led.toggle(xledplot, 2)
        }
        basic.pause(1000)
        counter += 1
    }
})
let unit = 0
let totalCount = 0
let counter = 0
let ledCounter = 0
let xledplot = 0
xledplot = 0
ledCounter = 1
counter = 0
totalCount = 30
unit = totalCount / 5
