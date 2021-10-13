const img = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const randomImg = img[Math.floor(Math.random() * img.length)];

const background = `url('./img/${randomImg}')`;

document.body.style.backgroundImage = background;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";