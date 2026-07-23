
let n=prompt("enter value of n :- ")
for(let k=1;k<=n;k++){
   if(n%k==0){                    // Check whether number is prime or not
    console.log("It's not a prime number ");
   }else{
    console.log("It's  a prime number");
   }
}
   
let sum=0;
for(let i=1;i<=n;i++){
    console.log(i);
    sum=sum+i;
}
console.log( "The sum of n is :- ",sum); // To find the sum of  n


console.log("To find the factor of n :-");
for(let j=1;j<=n;j++){
           if(n%j==0){
            console.log(j);     // To find the factor of n
           }
}


// this is code to find the sum
let d=prompt("enter the number")
let sum2=0;
while(d>0){
    let digit=d%10;
    sum= sum + digit;
    d=Math.floor(d/10);
}
console.log("the sum of digit is :-", sum);


// to find the Armstrong number
let A=Number(prompt("Enter your number :-"))
let original = A;
let temp = A;
let count = 0;
let sum = 0;

while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

temp = A;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + (digit ** count);
    temp = Math.floor(temp / 10);
}

if (sum === original) {
    console.log(original + " is an Armstrong Number");
} else {
    console.log(original + " is not an Armstrong Number");
}




