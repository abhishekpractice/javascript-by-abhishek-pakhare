// creating array

// const number = [10,20,30,40,50,60];

// console.log(number[0]);
// console.log(number[1]);

// Array of months

// const months = new Array('jan','feb','march','april');

const arrnum = [1232,733434,14732,5474,7213126,7,8,9];

//Sorting form lower to greater
arrnum.sort(function(number1,number2){
    return number1-number2;
});

//Sorting form greater to lower
arrnum.sort(function(number1,number2){
    return number2-number1;
});

console.log(arrnum);


//<ARRAY SORTING>
// let car = ['suzuki','honda','BMW','Mercedes'];

// console.log(car.sort().reverse());


// To remove element from the END of array we use POP
// months.pop();

// //Reverse array
// months.reverse();

// const arr1 = [1,2,3];
//       arr2 = [4,5,6];
// console.log(arr1.concat(arr2));
  
// console.log(months);



//  const mixArray = ['Abhishek','seawoods',8097533490,'Yes',2.14];

//  console.log(mixArray);

// //  console.log(Array.isArray(mixArray));

//  //Changing values of months
 
//  mixArray[1] = 'Navi Mumbai';

//  console.log(mixArray);
 
// console.log(months.indexOf('feb'));

// //PUSH is used to add element at the end of the array
// months.push('may');


// //UNSHIFT is use to add element at the start of the array

// months.unshift('Happy new year');

// //SPLICE is use to add element in middle of the array
// months.splice(2,null,'second month');
// console.log(months);
