let body = document.querySelector('body');
// let div = document.querySelector('#language');
try{
    body.classList=localStorage.getItem("light");
    // div.classList=localStorage.getItem("lang");
} catch (e) {
    console.log(e)
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let light = document.querySelector('#light');

light.addEventListener('click',function(){
    body.classList.toggle('lightmode');
    // document.getElementById('light').innerHTML = 'Sötét mód';
    localStorage.setItem("light",body.classList);
    document.querySelector('#light').innerHTML = body.classList.contains('lightmode')? '<i class="ri-moon-fill"></i>Sötét Mód':'<i class="ri-sun-fill"></i>Világos Mód';
    // document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Dark mode':'Light mode';
});

let light2 = document.querySelector('.mode-mob');

light2.addEventListener('click', function(){
    body.classList.toggle('lightmode');
    // document.getElementById('light').innerHTML = 'Sötét mód';
    localStorage.setItem("light",body.classList);
    document.querySelector('.mode-mob').innerHTML = body.classList.contains('lightmode')? '<i class="ri-moon-fill"></i>':'<i class="ri-sun-fill"></i>';
    // document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Dark mode':'Light mode';
});

// let lang = document.querySelector('#lang');

// lang.addEventListener('click',function(){
//     div.classList.toggle('english');
//     // document.getElementById('light').innerHTML = 'Sötét mód';
//     localStorage.setItem("lang",div.classList);
//     document.querySelector('#lang').innerHTML = div.classList.contains('english')? '<i class="ri-earth-fill"></i>Magyar':'<i class="ri-earth-fill"></i>English';
//     // document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Dark mode':'Light mode';
// });

