//template_xmpc19u
// service_2ch4lu9
// NbrtJNH_VyntV6zw5

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  //set footer links
  const footerLinks = document.querySelectorAll(".footer__social--link");
  if (contrastToggle) {
    document.body.classList += " dark-theme"
    //footerLinks.classList.remove("link__hover-effect--white");
    footerLinks.forEach(element => {
      element.classList.remove('link__hover-effect--white');
      element.classList.add('link__hover-effect--black');
    });
  } 
  else {
    //footerLinks.classList.remove("link__hover-effect--black");
    footerLinks.forEach(element => {
      element.classList.remove('link__hover-effect--black');
      element.classList.add('link__hover-effect--white');
    }); 
    document.body.classList.remove("dark-theme")
  }
}  

 function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
        .sendForm(
          "service_2ch4lu9",
          "template_xmpc19u",
          event.target,
          "NbrtJNH_VyntV6zw5"
     ) 
    .then(() => { 
       loading.classList.remove("modal__overlay--visible"); 
       success.classList += " modal__overlay--visible";
    })
    
    .catch((error) => {
      console.log('catch here')
      loading.classList.remove("modal__overlay--visible");
      alert( 
        "The email service is temporarily unavailable : " + (error.message) + " . Please contact me directly on jvince0812@gmail.com"
      );
    });
}

function toggleModal(event) { 
  console.log('tggle here');
  console.log(event);
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
