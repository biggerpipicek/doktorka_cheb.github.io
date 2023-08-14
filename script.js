var imgs = ["/styles/imgs/obr1.jpg", "/styles/imgs/obr2.jpg", "/styles/imgs/obr3.jpg"];
var affect = document.getElementById("images");
var currImgIndex = 0;

affect.style.backgroundImage = `url(${imgs[currImgIndex]})`;

// Function to change the backImg
function changeImg() {
    currImgIndex = (currImgIndex + 1) % imgs.length;
    affect.style.backgroundImage = `url(${imgs[currImgIndex]})`;
}

// Changes backImg every 10 secs
setInterval(changeImg, 10000);