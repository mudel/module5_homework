// 5.4 Строки. Числа Задание 3.
let str = prompt("Введи строку")
let invStr = "";
len = str.length; 
for (i=len-1; i>=0; i--) {
	invStr += str[i];
 	}
console.log(invStr);