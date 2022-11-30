// 5.3 Логический тип и ветвление Задание 1.
let num = +prompt("Введите число");
if (Number.isNaN(num)||(!(typeof(num) === 'number'))) {
	console.log("Упс, кажется, вы ошиблись");
	} else {
			if (num%2 == 0) {console.log("Оно четное")}
				 else {console.log("Оно нечетное")}
}