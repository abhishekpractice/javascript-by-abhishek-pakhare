const learning= 'learning javascript is fun';


// lenght of the string

output= learning.length;

//concantinate

output= learning.concat(""," and great");
//to uppercase
output= learning.toUpperCase();
// to lowecase
output= learning.toLowerCase();
// to find to the index of word
output= learning.indexOf('is');
// it will print -1 if search result not found
output= learning.indexOf('php');

const email='abc@gmail.com'

output=email.indexOf('@');

if(output > 0){
    console.log('valid email');
    
}else{
    console.log('Invaild email');
    
}



//Substring

output=learning.substring(0, 9);

output=learning.substring(learning.length-5);
//slice
output=learning.slice(0,10);

output=learning.slice(-2);  

//Split

output=learning.split(' ');

//Example

const hobbies='read,walk,run,sleep,hop';


output=hobbies.split(',');

//Replace

output=learning.replace('javascript','Morden javascript');
console.log(output);
