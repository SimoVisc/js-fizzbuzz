"use strict"

const ul = document.getElementById("numbers");

for(let i = 1; i<=100; i++){
    const element = document.createElement('li');
    element.innerHTML = i;
    ul.append(element)

    if(i % 3 ===0){
        element.innerHTML ="Fizz"
    }
    if(i % 5 ===0){
        element.innerHTML ="Buzz"
    }
}

