let n=Number(prompt("enter n numbers :- "))
 sum=0;
 for(let i=0;i<=n;i++){
    sum=sum+i;
 }
 console.log(` the sum of n is ${sum}`); // this is code to find the sum of n integer 

// this is code for print table of the n 
 for(let t=1;t<=10;t++){
    console.log(n + "*" + t + "=" + n*t);
 }

 // to fint the number is primenumber or not 

 let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}


// To find the factor of n integer 
for(let i=0;i<=n;i++){
    if(n%i==0){
        console.log(i);
    }
}

// this is code to find the sum
let d=139;
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









