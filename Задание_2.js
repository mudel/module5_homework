// 5.3 Логический тип и ветвление Задание 2.
let num = "wel";
if ((typeof(num) === 'number')&(!Number.isNaN(num))) {console.log("Это число")}
if ((typeof(num) === 'string')&(!Number.isNaN(num))) {console.log("Это строка")}
if ((typeof(num) === 'boolean')&(!Number.isNaN(num))) {console.log("Это boolean")}
