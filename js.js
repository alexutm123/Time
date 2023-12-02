

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
  
    snowflake.style.width = `${randomSize}px`;
    snowflake.style.height = `${randomSize}px`;
    snowflake.style.left = `${randomPosition}px`;
  
    const snowContainer = document.querySelector('.snow-container');
    snowContainer.appendChild(snowflake);
  
    let topPosition = -randomSize;
    const fallSpeed = 1 + Math.random() * 2; // Регулируем скорость падения снега
  
    function snowfall() {
      topPosition += fallSpeed;
      snowflake.style.top = `${topPosition}px`;
  
      const windowHeight = window.innerHeight;
      if (topPosition < windowHeight - randomSize) {
        requestAnimationFrame(snowfall);
      } else {
        snowflake.style.top = `${windowHeight - randomSize}px`; // Фиксируем снежинку на дне экрана
        snowflake.style.animation = 'increaseSize 1s infinite'; // Добавляем анимацию увеличения размера
      }
    }
  
    snowfall();
  }
  
  setInterval(createSnowflake, 100);
  