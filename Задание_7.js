// 5.6 Циклы Задание 7.
let arr = [3, 8, "apple", 0, 22, 14, false, null, 4, 15, 0];
let nul = 0;
let even = 0;
let odd = 0;
 for (s in arr) {
	if ((typeof(arr[s]) === 'number')&(!Number.isNaN(arr[s]))) {
		if (arr[s]==0) {nul++}
			else {
				if (arr[s]%2 == 0) {even++}
		 	 		else {odd++}
		}
	}
 }
console.log("Нулей - "+nul+"\nЧетных - "+even+"\nНечетных - "+odd);