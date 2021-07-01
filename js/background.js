const images=[
    "01.png",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
];
const randomImg=images[Math.floor(Math.random()*images.length)];

const bgImg=document.createElement("img");
bgImg.src=`img/${randomImg}`; //아직 js에만 존재 
document.body.appendChild(bgImg);
//appendChild: body에 html을 추가 
console.log(bgImg); 