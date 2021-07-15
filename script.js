// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// imageslider
let position = 0;

const nextSlide = function () {
    const imageSlider = document.getElementById('imageSliderAJ4');
    if (position == -600) {
        position += 600;
    } else {
        position -= 300;
    }
    imageSlider.style.transform = `translateX(${position}px)`;
}

const prevSlide = function () {
    const imageSlider = document.getElementById('imageSliderAJ4');
    if (position == 000) {
        position = -600;
    } else {
        position += 300;
    }
    imageSlider.style.transform = `translateX(${position}px)`;
}


// go to review function
function goToReview() {
  var elmnt = document.getElementById("comments");
  elmnt.scrollIntoView();
}

// back to top function
function backToTop() {
  var elmnt = document.getElementById("header");
  elmnt.scrollIntoView();
}

// add to cart function: add one to the cart
function addToCart() {
  confirm("Item added to Cart");
}