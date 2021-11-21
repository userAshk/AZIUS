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


var scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header")[0].classList.add('header-bg');
  } else {
    document.getElementsByClassName("header")[0].classList.remove('header-bg');
  }
};

