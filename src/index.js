/**
 * const letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let can upsert
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言は不可能
// let val2 = "let変数を再宣言";

// const val3 = "const";
// console.log(val3);

// // val3 = "const update";
// const val3 = "re const";

// constで定義したオブジェクトのプロパティは変更可能

// const val4 = {
//   name: "taaa",
//   age: 30
// };

// val4.name = "aaaa";
// val4.address = "yokosuka";

// console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monky");
console.log(val5);
