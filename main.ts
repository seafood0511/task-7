input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    led.setBrightness(input.lightLevel())
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
