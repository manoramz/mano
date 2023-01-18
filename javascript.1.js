javascript
// Rotating images on the home page
var currentImage = 0;
var images = document.getElementsByClassName("rotating-image");
setInterval(function() {
    images[currentImage].style.display = "none";
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.display = "block";
}, 5000);
document.getElementById("scrolling-text").innerHTML = "Goods and Services tax and types: An overview,Types of GST in India: Explained CGST,SGST,IGST,UTGST";


// Form validation for the "Book a Webinar" page
var form = document.querySelector("#book-a-webinar form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var phone = form.elements.phone.value;
    var business = form.elements.business.value;
    var location = form.elements.location.value;
    var time = form.elements.time.value;
    if (!name || !email || !phone || !business || !location || !time) {
        alert("Please fill out all the fields.");
    } else {
        alert("Form submitted successfully!");
    }
});
const links = document.querySelectorAll('#articles a');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const page = link.getAttribute('href');
        window.location.href = page;
    });
});
