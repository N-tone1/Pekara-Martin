document.addEventListener('DOMContentLoaded', (event) => {
const leftBtn = document.getElementById("prev");
const rightBtn = document.getElementById("next");
const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const yourContainer = document.getElementById("imgs");

let idx = 0;

let interval = setInterval(run, 2000);



var map = L.map('map').setView([45.83207, 15.99550], 18);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.83207, 15.99550]).addTo(map);

const containerWidth = yourContainer.offsetWidth;
function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0;
    } else if(idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * containerWidth}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    console.log('Right button clicked!');
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});


    // Your existing JavaScript code here
});


//tu ide kod za photoGallery.html 

var images = [
    "./photos/image (1).jpg",
    "./photos/image (2).jpg",
    "./photos/image (3).jpg",
    "./photos/image (4).jpg",
    "./photos/image (5).jpg",
    "./photos/image (6).jpg",
    "./photos/image (7).jpg",
    "./photos/image (8).jpg",
    "./photos/image (9).jpg",
    "./photos/image (10).jpg",
    "./photos/image (11).jpg",
    "./photos/image (12).jpg",
  ];

  var currentIndex = 0;
  var mainImage = document.getElementById('main');

  function imageChange(src) {
    mainImage.src = src;
    currentIndex = images.indexOf(src);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
  }


  document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    var navLinks = document.querySelectorAll('.container a');

    // Attach click event to each navigation link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Uncheck the checkbox when a link is clicked
        document.getElementById('hamburger').checked = false;

        setTimeout(function() {
            myLinksMenu.style.display = 'none';
          }, 300);
      });
    });
  });