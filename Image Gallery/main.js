//using event listener and for each loop
const gallery = document.querySelectorAll(".image");
const previewBox = document.querySelector(".preview-box");
const descBox = previewBox.querySelector(".image-description")
const previewImg = previewBox.querySelector("img");
const previewText = previewBox.querySelector(".img-desc");
const closeIcon = previewBox.querySelector(".closeIcon");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");

// Description of each image
const descImg = [
    "Capture every precious moment with this amazing camera.",
    "Tasty dessert by Gianluca Carenza, eat good feel good!",
    "Round cake with assorted fruits is all you need to cheer up!",
    "Feel cozy in this beautiful river side cottage!",
    "Gardening for Butterflies. Living color garden center.",
    "Let's play with snow. Location: Mommoth Lakes.",
    "Got passion for photography? Here's a guide to become wildlife phtographer.",
    "Nature never fails to amaze the human civilisation!",
    "Feeling stressed? This is your call to get back your spirit.",
];

function setProperties(selectedImageUrl, position, length) {
    previewImg.src = selectedImageUrl;
    currentImg.textContent = position;
    totalImg.textContent = length;
    descBox.style.display = "block";
    previewText.textContent = descImg[position-1];
}

function preview() {
    previewBox.style.display = "block";
    previewBox.style.transition = "all 0.3s ease";
}
Array.from(gallery).forEach((image, index) => {
    console.log("index: " + index);
    let length = gallery.length;
    image.addEventListener('click', (event) => {
        let selectedImageUrl = event.target.src;
        console.log(selectedImageUrl);
        let position = index + 1;
        console.log(position);
        setProperties(selectedImageUrl, position, length);

        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        prevBtn.onclick = () => {
            if (position <= 1) {
                index = length - 1;
                position = length + 1;
            }
            position--;
            let prevImgUrl = "images/img" + position + ".jpg";
            console.log(prevImgUrl);
            setProperties(prevImgUrl, position, length);
            preview();
        }
        nextBtn.onclick = () => {
            if (position > length - 1) {
                index = 0;
                position = 0;
            }
            position++;
            let nextImgUrl = "images/img" + position + ".jpg";
            console.log(nextImgUrl);
            setProperties(nextImgUrl, position, length);
            preview();
        }
        document.querySelector("body").style.overflow = "hidden";
        preview();
        shadow.style.display = "block";


        closeIcon.onclick = () => {
            position = index + 1;
            previewBox.style.display = "none";
            shadow.style.display = "none";
            document.querySelector("body").style.overflow = "scroll";
        }
    })

})