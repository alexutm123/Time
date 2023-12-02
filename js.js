
let hr=document.querySelector('#hr');
let mn=document.querySelector('#mn');
let sc=document.querySelector('#sc');
setInterval(()=>{
let day=new Date();
let hh=day.getHours()*30;
let mm=day.getMinutes()*6;
let ss=day.getSeconds()*6;

hr.style.transform= `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform=`rotateZ(${mm}deg)`;
sc.style.transform=`rotateZ(${ss}deg)`; 
})



function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
  
    const randomSize = Math.random() * 4;
    const randomPosition = Math.random() * window.innerWidth;
    const randomAnimationDuration = Math.random() * 10 + 5;
  
    snowflake.style.width = `${randomSize}px`;
    snowflake.style.height = `${randomSize}px`;
    snowflake.style.left = `${randomPosition}px`;
    snowflake.style.animationDuration = `${randomAnimationDuration}s`;
  
    const snowContainer = document.querySelector('.snow-container');
    snowContainer.appendChild(snowflake);
  
    snowflake.addEventListener('animationiteration', () => {
      const windowHeight = window.innerHeight;
      const snowflakes = document.querySelectorAll('.snowflake');
      snowflakes.forEach((flake) => {
        const flakeRect = flake.getBoundingClientRect();
        if (flakeRect.bottom >= windowHeight) {
          flake.style.animation = 'none';
          flake.style.bottom = '0';
        }
      });
    });
  }
  
  setInterval(createSnowflake, 100);
  
// function randomText()
// {
//     var text=("12321421421412412421");
//     letter=text[Math.random()*text.length]
//     return letter;
// }


// function rain(){
//     let cloud=document.querySelector('.clock');
//     let e=document.createElement('div');
//     let left =Math.floor(Math.random()* 320);
//     let size=Math.random()*1.5;
//     e.classList.add('text');
//     cloud.appendChild(e);
//     e.innerText='z'
//     e.style.left=left+'px';
//     e.style.fronSize=0.5+size+'em';
    
    
//     setTimeout(function(){
//         cloud.removeChild(e)
//     },2000)
// }
//     setInterval(function(){
//         rain()
//     },20);
    
    
    
    