"use strict"

const ul = document.getElementById("numbers");

for(let i = 1; i<=100; i++){
    const element = `<li>${i}</li>`;
    ul.innerHTML += element;
    if(i % 3 ===0){
        console.log(i)= "Fizz"
    }
}
console.log(element,)



