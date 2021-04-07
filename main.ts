input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onGesture(Gesture.Shake, function () {
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    range = strip.range(2, 2)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
})
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
