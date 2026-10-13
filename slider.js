
const images = [
    "./landscape-1.jpeg",
    "./landscape-2.jpeg",
    "./landscape-3.jpeg",
    "./landscape-4.jpeg"
];

let currentIndex = 0;

const slide = document.getElementById("slide");
const dots = document.getElementById("dots");

function showImage() {
    slide.src = images[currentIndex];

    dots.innerHTML = "";

    images.forEach(function(image, index) {
        const dot = document.createElement("button");

        if (index === currentIndex) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", function() {
            currentIndex = index;
            showImage();
        });

        dots.appendChild(dot);
    });
}

document.getElementById("next").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

document.getElementById("prev").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

showImage();
