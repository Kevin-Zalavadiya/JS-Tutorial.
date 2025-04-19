// console.log("hi i am kevin");
// var myAge = 30;
// console.log(myAge)

// var my_firstName = 56;
// console.log(typeof my_firstName);

// var my_firstName = null;
// console.log(typeof null);

// var my_firstName = 5;
// console.log(typeof String(my_firstName))
// console.log(typeof my_firstName)

// let sum = 5 + '89' + 'kevin'
// console.log(sum)

// console.log(typeof 28 +'89')

// console.log('kevin'-'patel')

// console.log(true - false)

// console.log(28 - 89)
// console.log('28' - 89)
// console.log('  '+ '  ')
// console.log(true + false)

// var m = 30
// var n = 78
// var division = m/n
// console.log(division)

// var result  = "hello"/2
// console.log(result)

// var a = 0.1 + 0.2
// console.log(a)

// console.log(a.toFixed(1))
// when precise decimal representation is necessary like print 0.30000000000000004 after (.) value like 0.3

// console.log(5 === '5')
// third === is consder and compare with  data type  and print result

// var a = 14;
// var b = 10;
// age 18 up or dribing licence

// var age = 90;
// var result = age >= 18 ? 'yes' : 'no'
// console.log(result)

// if else and else if


// var age = 18;

// if(age<18 && age>18){
//     console.log('you can drive')
// }
// else{
//     console.log('you cant work')
// }


// var signal = 'red';

// if(signal === 'red'){
//     console.log('stop')
// }
// else if(signal === 'yellow'){
//     console.log('slow down')
// }
// else{
//     console.log("go");

// }

// let temperature = 18;
// let israining = 'rain'

// if(israining === 'rain'){
//     console.log('yes')
// }
// else{
//     console.log("no");

// }

//  Switch loop

// let command = 'play';

// switch(command){
// case "play":
//     console.log('play music');
//     break;
// case "pause":
//     console.log('pause music');
//     break;
// default:
//     console.log('cant match conditon')
// }

// while loop
// let num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// var num = 1;
// while(num <= 10){
//     console.log("5*" + num + "=" + 5 * num);
//     num++;
// }
     
// var num = 1;
// while(num <= 10){
//     console.log(`5 *  ${num} = ${5 * num}`);
//     num++;
// }

// do while loop

// let userinput;
// let positivenumber;
// do{
//     userinput = prompt('enter any positive nukber')
//     positivenumber = parseFloat(userinput);

// }
// while(isNaN(positivenumber)||positivenumber<0);
// console.log('you enter valid positive number');

// for loop

// var num = 1;
// while (num <= 10){
//     console.log("5 * "+ num + " = " + 5 * num);
//     num++;
// }

// for (var num = 1; num <= 10; num++){
//     console.log("5 * "+ num + " = " + 5 * num);
// }


// arrow function
// const add = (a, b) => a + b;
// console.log(add(2,3));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

const obj1 = { name: 'Alice' };
const obj2 = { age: 30 };

const mergeobj = { ...obj1, ...obj2 };
console.log(mergeobj);


