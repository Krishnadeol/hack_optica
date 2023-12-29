// import React, { useState, useEffect } from 'react';
// import './heading.css';

// export default function Heading(props) {
//   const [fadeSliderValue, setFadeSliderValue] = useState(0);
//   const [flickerDurationValue, setFlickerDurationValue] = useState(100);
//   useEffect(() => {
//     const container = document.getElementById("container");
//     const createP = (text) => {
//       container.innerHTML = ""; 
//       for (let i = 0; i < text.length; i++) {
//         const p = document.createElement("p");
//         p.classList.add("flicker");
//         container.appendChild(p);
//         p.innerHTML = text[i];
//       }
//     };
//     createP(props.text);
//     let temp = 0;
//     const myInterval = setInterval(() => {
//     const p = document.getElementsByClassName("flicker");
//     const randomNumber = Math.floor(Math.random() * (p.length));
//      let l=p.length;
//       for (let i = 0; i <l; i++) {
//         p[i].style.transitionDuration = fadeSliderValue + "s";
//       }
//       temp = temp + 1;
//       if (!p[randomNumber].classList.contains("on") && temp < flickerDurationValue) {
//         p[randomNumber].classList.add("on");
//       } else {
//         if (temp < flickerDurationValue) {
//           p[randomNumber].classList.remove("on");
//           p[randomNumber].classList.remove("white");
//         } else {
//           p[randomNumber].classList.add("white");
//           p[randomNumber].classList.remove("on");
//         }
//       }
//       if (temp === flickerDurationValue + 500) {
//         clearInterval(myInterval);
//       }
//     }, 20);
//   }, [fadeSliderValue, flickerDurationValue]); 
  
//   return (
//     <div>
//     <div className="container" id="container">
//     </div>      
//     </div>
//   )
// }
