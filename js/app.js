

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 79
  });

}

//ABOUT
document.getElementById("about-btn").addEventListener('click', () => {
  scrollTo(document.getElementById("about"));
});

//SERVICES
document.getElementById("serv-btn").addEventListener('click', () => {
  scrollTo(document.getElementById("services"));
});

//PERTNERS
// document.getElementById("partners-btn").addEventListener('click', () => {
//   scrollTo(document.getElementById("partners"));
// });

//CONTACTS
document.getElementById("contacts-btn").addEventListener('click', () => {
  scrollTo(document.getElementById("contacts"));
});

// // HEADER BGCOLOR
// var className = "inverted";
// var scrollTrigger = 60;

// window.onscroll = function() {
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//     document.getElementsByTagName("header")[0].classList.add('header-bg');
//   } else {
//     document.getElementsByTagName("header")[0].classList.remove('header-bg');
//   }
// };


//BURGER MENU SHOW HIDE
$('.menu-btn').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-block').toggleClass('menu-block_active')
  $('.header').css('background', 'rgba(0, 0, 0, 0.8)')
  

  $('.menu-block a' ).on('click', function(e){
    $('.menu-block').removeClass('menu-block_active')
    $('.menu-btn').removeClass('menu-btn_active')
  })  
});

let allModals = document.querySelectorAll("*[data-modal-btn]");

for(let i=0; i<allModals.length; i++){
  allModals[i].addEventListener('click', function () {
    let name = allModals[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window='"+name+"']");
    modal.style.display = 'block';

    let close = modal.querySelector('.close-modal-window');
    close.addEventListener('click', function () {
      modal.style.display = "none";
    })
  })
}

window.onclick = function (e) {
  if (e.target.hasAttribute('data-modal-window')){
    let modals = document.querySelectorAll('*[data-modal-window]');
    for (let i=0; i<modals.length; i++){
      modals[i].style.display = 'none';
    }
  }
}