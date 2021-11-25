function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 79
  });
  event.preventDefault();
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
document.getElementById("partners-btn").addEventListener('click', () => {
  scrollTo(document.getElementById("partners"));
});

//CONTACTS
document.getElementById("contacts-btn").addEventListener('click', () => {
  scrollTo(document.getElementById("contacts"));
});

//BURGER MENU SHOW HIDE
$('.menu-btn').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-block').toggleClass('menu-block_active')
  $('.header').css('background', 'rgba(0, 0, 0, 0.8)')
  

  $('.menu-block a' ).on('click', function(e){
    $('.menu-block_active').hide()
  })  
});

// const menuBtn = document.querySelector('.menu-btn')
// const menuBlock = document.querySelector('.menu-block')
// const header = document.querySelector('.header');

// const addClass = (e) => {
//   if(menuBtn){
//     menuBtn.classList.add('menu-btn_active')
//     menuBlock.classList.add('menu-block_active')
//     header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
//   }
// }

// menuBtn.addEventListener('click', addClass)

