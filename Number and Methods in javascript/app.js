//Numbers

const num1 = 30,
      num2 = 20,
      num3 = -6;

let result;

//add
result = num1 + num2;

//subtract
result = num1 - num2;

//multiplication
result = num1 * num2;

//divide
result = num1 / num2;

//module
result = num1 % num2;

//Pi
result = Math.PI;

//round of the value 
result =Math.round(2.4);

//round the number UP CEIL
result = Math.ceil(2.1);

//round the number DOWN FLOOR
result = Math.floor(2.98);

//square root
result = Math.sqrt(256);

//ABS number or convert negative to positive
result = Math.abs(num3);

//Power 
result = Math.pow(5,2);
//minimum number
result = Math.min(2.5,6,7,9,45,89);

//Maximum number
result = Math.max(2.5,6,7,9,45,89);


//mix funtion
result = 20 + 30 * 20;

result = (20 + 30) * 20;

// 20 percent discount example

const cartItems = (20 + 45 + 60 +70);
const discount = (cartItems/100) * 20;

const totalPay = cartItems - discount;
console.log('Total amount :'+ cartItems);

console.log('Discount ammount is : '+ discount);

console.log('Total amount after discount :' + totalPay);



console.log(result);

//increment and decrement

let score = 5;

score++;

score += 20;
console.log(score);
