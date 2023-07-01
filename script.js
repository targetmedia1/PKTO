const imageUrls = [
  'img/location.svg',
  'img/blac location.svg',
  'img/colored box.svg',
  'img/box.svg',
  'img/yellow money.svg',
  'img/money.svg',
  'img/colored star.svg',
  'img/start.svg'
];

function animateSlider() {
  const sliderImages = document.querySelectorAll('.slider-imgaes');
  const totalImages = sliderImages.length;

  let currentIndex = Array.from(sliderImages).findIndex((img) =>
    img.classList.contains('active')
  );

  let nextIndex = (currentIndex + 1) % totalImages;

  sliderImages[currentIndex].classList.remove('active');
  sliderImages[nextIndex].classList.add('active');

  const serviceDivs = document.querySelectorAll('.service');
  const totalDivs = serviceDivs.length;

  let currentDivIndex = Array.from(serviceDivs).findIndex((div) =>
    div.classList.contains('selected')
  );

  let nextDivIndex = (currentDivIndex + 1) % totalDivs;

  serviceDivs[currentDivIndex].classList.remove('selected');
  serviceDivs[nextDivIndex].classList.add('selected');

  // Update image URLs for the selected and previous services
  const selectedServiceImage = serviceDivs[nextDivIndex].querySelector('.service-img');
  const previousServiceImage = serviceDivs[currentDivIndex].querySelector('.service-img');

  selectedServiceImage.src = imageUrls[nextDivIndex * 2];
  previousServiceImage.src = imageUrls[currentDivIndex * 2 + 1];

  // Call the animateSlider function again after the transition duration
  setTimeout(animateSlider, 4000); // Adjust the delay between each image display here
}

// Call the animateSlider function to start the animation
animateSlider();



const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");


const q1PressHandler= () =>{
  q1.classList.add('display-answoer');
  q2.classList.remove('display-answoer');
  q3.classList.remove('display-answoer');
  q4.classList.remove('display-answoer');
  a1.classList.remove('disapear');
  a2.classList.add('disapear');
  a3.classList.add('disapear');
  a4.classList.add('disapear');
};

const q2PressHandler= () =>{
  q1.classList.remove('display-answoer');
  q2.classList.add('display-answoer');
  q3.classList.remove('display-answoer');
  q4.classList.remove('display-answoer');
  a1.classList.add('disapear');
  a2.classList.remove('disapear');
  a3.classList.add('disapear');
  a4.classList.add('disapear');
};

const q3PressHandler= () =>{
  q1.classList.remove('display-answoer');
  q2.classList.remove('display-answoer');
  q3.classList.add('display-answoer');
  q4.classList.remove('display-answoer');
  a1.classList.add('disapear');
  a2.classList.add('disapear');
  a3.classList.remove('disapear');
  a4.classList.add('disapear');
};

const q4PressHandler= () =>{
  q1.classList.remove('display-answoer');
  q2.classList.remove('display-answoer');
  q3.classList.remove('display-answoer');
  q4.classList.add('display-answoer');
  a1.classList.add('disapear');
  a2.classList.add('disapear');
  a3.classList.add('disapear');
  a4.classList.remove('disapear');
};


q1.addEventListener("click", q1PressHandler);
q2.addEventListener("click", q2PressHandler);
q3.addEventListener("click", q3PressHandler);
q4.addEventListener("click", q4PressHandler);




const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const slider = document.querySelector('.slider2');


let x = 0 ;

const swap = () => {
 if(x===0){
  
  slide1.style.left = "200%";
  slide2.style.right = "50%";
  x=1;
  dot2.style.backgroundColor= "#500A7A"
  dot1.style.backgroundColor= "#fff"
 }
 else if(x===1){
  slide1.style.left = "50%";
  slide2.style.right = "200%";
  x=0;
  dot1.style.backgroundColor= "#500A7A"
  dot2.style.backgroundColor= "#fff"
 }

}


dot2.addEventListener("click", ()=>{slide1.style.left = "200%";
slide2.style.right = "50%";
dot2.style.backgroundColor= "#500A7A"
dot1.style.backgroundColor= "#fff"})



dot1.addEventListener("click", ()=>{slide1.style.left = "50%";
slide2.style.right = "200%";
dot1.style.backgroundColor= "#500A7A"
dot2.style.backgroundColor= "#fff"})

setInterval(swap, 5000);

const apple_btn = document.getElementById("apple-btn");
const apple_img = document.getElementById("apple-img");
const aindivuals = document.getElementById("aindivuals");
const aplay = document.getElementById("aplay");
const google_btn = document.getElementById("google-btn");
const google_img = document.getElementById("google-img");
const gindivuals = document.getElementById("gindivuals");
const gplay = document.getElementById("gplay");

const mouseEnterAppleHandler =() =>{
  apple_btn.style.backgroundColor="#fff";
  aplay.style.color="#000";
  aindivuals.style.color="#000";
  apple_img.setAttribute('src', 'img/apple black.svg');
};

const mouseLeaveAppleHandler =() =>{
  apple_btn.style.backgroundColor="transparent";
  aplay.style.color="#fff";
  aindivuals.style.color="rgba(255, 255, 255, 0.75)";
  apple_img.setAttribute('src', 'img/apple white.svg');
};

const mouseEnterGoogleHandler =() =>{
  google_btn.style.backgroundColor="#fff";
  gplay.style.color="#000";
  gindivuals.style.color="#000";
  google_img.setAttribute('src', 'img/google color.svg');
};

const mouseLeaveGoogleHandler =() =>{
  google_btn.style.backgroundColor="transparent";
  gplay.style.color="#fff";
  gindivuals.style.color="rgba(255, 255, 255, 0.75)";
  google_img.setAttribute('src', 'img/google white.svg');
};



apple_btn.addEventListener("mouseenter", mouseEnterAppleHandler);
apple_btn.addEventListener("mouseleave", mouseLeaveAppleHandler);


google_btn.addEventListener("mouseenter", mouseEnterGoogleHandler);
google_btn.addEventListener("mouseleave", mouseLeaveGoogleHandler);




const apple_btn1 = document.getElementById("apple-btn1");
const apple_img1 = document.getElementById("apple-img1");
const aindivuals1 = document.getElementById("aindivuals1");
const aplay1 = document.getElementById("aplay1");
const google_btn1 = document.getElementById("google-btn1");
const google_img1 = document.getElementById("google-img1");
const gindivuals1 = document.getElementById("gindivuals1");
const gplay1 = document.getElementById("gplay1");

const mouseEnterAppleHandler1 =() =>{
  apple_btn1.style.backgroundColor="#fff";
  aplay1.style.color="#000";
  aindivuals1.style.color="#000";
  apple_img1.setAttribute('src', 'img/apple black.svg');
};

const mouseLeaveAppleHandler1 =() =>{
  apple_btn1.style.backgroundColor="transparent";
  aplay1.style.color="#fff";
  aindivuals1.style.color="rgba(255, 255, 255, 0.75)";
  apple_img1.setAttribute('src', 'img/apple white.svg');
};

const mouseEnterGoogleHandler1 =() =>{
  google_btn1.style.backgroundColor="#fff";
  gplay1.style.color="#000";
  gindivuals1.style.color="#000";
  google_img1.setAttribute('src', 'img/google color.svg');
};

const mouseLeaveGoogleHandler1 =() =>{
  google_btn1.style.backgroundColor="transparent";
  gplay1.style.color="#fff";
  gindivuals1.style.color="rgba(255, 255, 255, 0.75)";
  google_img1.setAttribute('src', 'img/google white.svg');
};



apple_btn1.addEventListener("mouseenter", mouseEnterAppleHandler1);
apple_btn1.addEventListener("mouseleave", mouseLeaveAppleHandler1);


google_btn1.addEventListener("mouseenter", mouseEnterGoogleHandler1);
google_btn1.addEventListener("mouseleave", mouseLeaveGoogleHandler1);



const expand = document.getElementById("expand");
const rl = document.getElementById("rl");
let hidden = true;

const expandClickHandler = () => {
  rl.style.display = hidden ? "flex" : "none";
  hidden = !hidden;
};

const documentClickHandler = (event) => {
  if (!expand.contains(event.target) && !rl.contains(event.target)) {
    rl.style.display = "none";
    hidden = true;
  }
};

expand.addEventListener("click", expandClickHandler);
document.addEventListener("click", documentClickHandler);




document.addEventListener('DOMContentLoaded', function() {
  var sections = document.getElementsByTagName('section');
  var windowHeight = window.innerHeight;

  function handleScroll() {
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionTop = section.getBoundingClientRect().top;
      var opacity = (windowHeight - sectionTop) / windowHeight;
      opacity = Math.max(0, opacity);
      opacity = Math.min(1, opacity);
      section.style.opacity = opacity;
    }
  }

  window.addEventListener('scroll', handleScroll);
});

var bodyWidth = document.body.offsetWidth;
console.log("Body width: " + bodyWidth + "px");



const change = document.getElementById("change");
const head = document.getElementById("head");
const changeImg = document.getElementById("change-img");
let changed = false;

const changehandler = ()=>{
if(!changed){
  head.style.background = 'url("img/orange\ texture.svg")';
  changeImg.setAttribute('src', 'img/change 1.png');
  changed=true;
}
else{
  head.style.background = 'url("img/texture.png")';
  changeImg.setAttribute('src', 'img/change.svg');
  changed= false;
}
}


change.addEventListener("click", changehandler);

