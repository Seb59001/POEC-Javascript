// Création du noeuds : footer

let footer = document.createElement('footer');

let socialNav = document.createElement('nav');

socialNav.className = 'social_nav';

let body = document.querySelector('body');

body.append(footer);

footer.prepend(socialNav);

let ul = document.createElement('ul');

socialNav.append(ul);

let li1 = document.createElement('li');

ul.append(li1);

let a1 = document.createElement('a');

a1.setAttribute('href', '#');
a1.setAttribute('title', 'Facebook');

li1.append(a1);

let i1 = document.createElement('i');

i1.classList.add('fa-brands');
i1.classList.add('fa-facebook');

a1.append(i1);


let li2 = document.createElement('li');

ul.append(li2);

let a2 = document.createElement('a');

a2.setAttribute('href', '#');
a2.setAttribute('title', 'Instagram');

li2.append(a2);

let i2 = document.createElement('i');

i2.classList.add('fa-brands');
i2.classList.add('fa-instagram');

a2.append(i2);


let li3 = document.createElement('li');

ul.append(li3);

let a3 = document.createElement('a');

a3.setAttribute('href', '#');
a3.setAttribute('title', 'Pinterest');

li3.append(a3);

let i3 = document.createElement('i');

i3.classList.add('fa-brands');
i3.classList.add('fa-pinterest');

a3.append(i3);


let otherNav = document.createElement('nav');

otherNav.className = 'other_nav';

let ulOtherNav = document.createElement('ul');

otherNav.append(ulOtherNav);

let li4 = document.createElement('li');
li4.classList.add("copyright");

ulOtherNav.append(li4);

li4.textContent = "@Copyright HedghogInLove";


let li5 = document.createElement('li');

ulOtherNav.append(li5);

let a4 = document.createElement('a');

a4.setAttribute('href', '#');
a4.textContent = "C.G.U"

li5.append(a4);


let li6 = document.createElement('li');

ulOtherNav.append(li6);

let a5 = document.createElement('a');

a5.setAttribute('href', '#');
a5.textContent = "Mentions légales";

li6.append(a5);

footer.append(otherNav);


//--------------------------------------- Construction du footer