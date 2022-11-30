// 5.6 Циклы Задание 6.
let arr = [3, 'apple', 3, 3];
let allSame = true;
for (s in arr) {
	if (arr[s] !== arr[0]) {
		allSame = false;		
	}
 }
console.log(allSame);