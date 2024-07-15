let i;
for(i=1;i<=100;i++){
if(i%5==0 && i%3==0){
    document.write("Fizz Buzz","<br>");
}
else if(i%5==0){
    document.write("Buzz","<br>");
}
else if(i%3==0){
    document.write("Fizz","<br>");
}
else{
    document.write(i,"<br>");
}
}

//palindrome
function palindrome(str)
{
    let str1="";
    let i;
    for (i=str.length-1;i>=0;i--){ 
        str1 =str1 + str[i];
    }
    if(str==str1){
        return "Palindrome";
    }
    else{
        return "Not a Palindrome";
   }
}
console.log(palindrome("malayalam"));

// Largest Number in an array
function large(arr1){
    console.log(Math.max(...arr1));
}
let arr1=[2,5,3,9];
large(arr1);


// factorial
function factorial(num1){
    let i;
    let fact=1;
    for(i=num1;i>=1;num1--){
       fact= fact*i;
    }
    return (fact);
}
console.log(factorial(5));


// Celsius to Fahrenheit
function celtofah(Celsius){
    Fahrenheit = (Celsius * 1.8) + 32;
    return Fahrenheit;
}
console.log(celtofah(14));
