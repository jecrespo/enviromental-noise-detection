OLED.init(128, 64)
RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 21)
RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 55)
RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
basic.forever(function () {
    OLED.clear()
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR))
    OLED.writeStringNewLine(":")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE))
    OLED.newLine()
    OLED.writeString("Noise")
    OLED.writeNum(Environment.ReadNoise(AnalogPin.P1))
    basic.pause(1000)
})
