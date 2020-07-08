 
// // 1) Работа с concat
const Array1 = [1, 2, 3];
const Array2 = [4, 5, 6];
const Array3 = Array1.concat(Array2);
console.table(Array3);


// // 2) Работа с reverse
const reversedArray = Array1.reverse();
console.table('reversed:', reversedArray);


// 3) Работа с push, unshift
const newArray1 = Array1.push(4, 5, 6);
console.table(Array1);


const newArray2 = Array1.unshift(4, 5, 6);
console.table(Array1);


// // 4) Работа с splice
// 1)
const Array = [1, 2, 3, 4, 5, 6];
const spliceModifyArray = Array.splice(1, 2);
const modifyArray = Array.splice(3,1);
console.table(Array);


// 2)
const currentArray = Array.splice(0, 1);
const resultArray = Array.splice(4, 1);
console.table(Array);

// 3)
const anotherArray = Array.splice(3, 0, 'a', 'b', 'c');
console.table(Array);

// 4)
const newArray = Array.splice(1, 0, 'a', 'b');
const spliceModifyArray1 = Array.splice(6, 0, 'c');
const spliceModifyArray2  = Array.splice(8, 7, 'e');
console.table(Array);


// 5) Работа с sort
const dataArray = [3, 4, 1, 2, 7];
console.table(dataArray.sort());


// 6) Работа с Object.keys
const userObject = { 
	js:'test', 
 	jq: 'hello', 
 	css: 'world'
};
console.table(Object.keys(userObject));
