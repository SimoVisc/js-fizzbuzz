"use strict"

const ul = document.getElementById("numbers");
// Scrivi un programma che stampi in console i numeri da 1 a 100
for(let i = 1; i<=100; i++){
    const element = document.createElement('li');
    element.innerHTML = i;
    ul.append(element)
    // per i multipli di 3 stampi “Fizz” al posto del numero
    if(i % 3 ===0){
        element.innerHTML ="Fizz"
    }
    // per i multipli di 5 stampi “Buzz” al posto del numero
     if(i % 5 ===0){
        element.innerHTML ="Buzz"
    }
     // per i multipli di 3 e 5 stampi “FizzBuzz” al posto del numero
    if( i % 3 ===0 && i % 5 ===0){
        element.innerHTML ="FizzBuzz"
    }
}

