
// Écouteur d'évènement sur le premier rectangle

let rectangle1 = document.querySelector('#click');

rectangle1.addEventListener('click', function() {
    this.classList.toggle('yellow');


    // Le poids est plus important en passant par le Javascript
    // this.style.backgroundColor = 'red';
});


// Écouteur d'évènement sur le deuxième rectangle


let rectangle2 = document.querySelector('#double-click');

rectangle2.addEventListener('dblclick', function() {
    this.classList.toggle('rotate');
});



// Écouteurs d'évènements sur le troisième rectangle

let rectangle3 = document.querySelector('#mouse');

rectangle3.addEventListener('mouseenter', function() {
    this.classList.toggle('bigger');
})



// Écouteur d'évènement sur le 4ème rectangle

let rectangle4 = document.querySelector('#copy');

rectangle4.addEventListener('copy', function() {
    this.textContent = "......";
})

// Écouteur d'évènement sur le 5ème rectangle


let rectangle5 = document.querySelector('#live');

let input = document.querySelector('div>input');

let p = document.querySelector('div>p')


rectangle5.addEventListener('keyup', function () {
    p.textContent = input.value;
});