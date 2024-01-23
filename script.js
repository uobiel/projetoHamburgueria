var modal = document.querySelector('.fade');
var whatsapp = document.querySelector('.whatsapp');
var instagram = document.querySelector('.insta');
var twitter = document.querySelector('.twitter');


function abreModal(){
    modal.style.display = 'flex';
}

function fechaModal(){
    modal.style.display = 'none';
}

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    });
});