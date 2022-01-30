// console.log("hello world")

//map

// Array.prototype.myMap = function(callback) {
//     let newArr=[];
//     for(let i=0;i<this.length;i++){
//         newArr.push(callback(this[i]));
//     }
//     return newArr;
// }

// let array=[1,2,3,4,5]
// let newdoubleArr =array.myMap(function(value)
// {
//     return value*2;
// });

// let doubleArr=array.myMap(ithval => ithval*2);

// console.log(doubleArr);

//filter

// Array.prototype.myFilter = function(callback) {
//     let newArr =[];
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// let arr2 =[1,2,3,4,5,6,7,8,9,11,13,15,17,19,21,2,1]

// console.log(arr2);
// let odds = arr2.myFilter(val=>val%2 ==1 ?true:false)
// console.log(odds);

//reduce

// Array.prototype=myReduce =function(callback) {
//     let result =this[0]
//     for(let i=1;i,this.length;i++){
//         result = callback(result,this[i]);
//     }
//     return result;
// }

// let redArr=[1,2,3];
// let sum = redArr.reduce(function(acc,val){
// return acc+val;
// })
// console.log("sum=" ,sum)

//Q) using reduce find the total no ofitem in the cart and find the total priceof the cart in the cart

let cart = [
    {
        name: "shoes",
        price: 100,
        quantity: 2
    },
    {
        name: "shirt",
        price: 50,
        quantity: 1
    },
    {
        name: "pants",
        price: 150,
        quantity: 3
    }
]


let totalItems = cart.reduce(function (acc, val) {
    return acc + val.quantity;
}, 0)
// a    val
// 0   + 2 = 2
// 2   + 1 = 3
// 3   + 3 = 6

console.log("total items =", totalItems);

let totalPrice = cart.reduce(function (acc, nextObj) {
    return acc + nextObj.price * nextObj.quantity;
}, 0)

console.log("total price =", totalPrice);