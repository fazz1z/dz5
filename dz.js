// 1
// let arr = ['apelsin', 'banan'];
// arr.push('apple', 'dunya');
// console.log(arr);
// 2
// let arr1 = ['first','second'];
// let arr2 = [3,4];
// let all = arr1.concat(arr2);
// console.log(all);
// 3
// let arr = ['first','second','third'];
// arr.shift();
// console.log(arr);
// 4
// let arr = [1,7,6,4];
// if (arr.includes(7)) {
//     console.log('takiy element isnuye')
// }
// else {
//     console.log('takiy element ne isnuye')
// }
// 5
let arr = [];
let elem;
do {
    elem = +prompt("element :");
    if (arr.includes(elem) || elem == '' || elem == null){
        continue;
    }
    else {
        arr.push(elem);
    }
}
while (elem);
console.log(arr);
