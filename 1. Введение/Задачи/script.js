// + перед переменной позволяет преобразовать её в число
let height = +prompt("Введите длинну")
let width = +prompt("Введите ширину")

// <br> - перенос строки
document.write(`Длинна = ${height}<br>`)
document.write(`Ширина = ${width}<br>`)
document.write(`Периметр = ${(height + width) * 2}<br>`)
document.write(`Площадь = ${height * width}`)