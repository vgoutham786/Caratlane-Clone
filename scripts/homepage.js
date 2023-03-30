
//   let slideIndex = 1;
//   showSlides(slideIndex);

//   function plusSlides(n) {
//     showSlides((slideIndex += n));
//   }

//   function currentSlide(n) {
//     showSlides((slideIndex = n));
//   }

//   function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";

//   }
  
//   const productContainers = [...document.querySelectorAll('#bestbox')];
//   const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
//   const preBtn = [...document.querySelectorAll('.pre-btn')];
  
//   productContainers.forEach((item, i) => {
//       let containerDimensions = item.getBoundingClientRect();
//       let containerWidth = containerDimensions.width;
  
//       nxtBtn[i].addEventListener('click', () => {
//           item.scrollLeft += containerWidth;
//       })
  
//       preBtn[i].addEventListener('click', () => {
//           item.scrollLeft -= containerWidth;
//       })
//   })

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1000); // Change image every 2 seconds
}


// popup

let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

// let know=document.getElementById("sspan")
// function  knowOpen(){
//     format.classList.add("vision")
// }