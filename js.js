let hourHand = document.querySelector('#hr');
let minuteHand = document.querySelector('#mn');
let secondHand = document.querySelector('#sc');

function updateClock() {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hourHand.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
  minuteHand.style.transform = `rotateZ(${mm}deg)`;
  secondHand.style.transform = `rotateZ(${ss}deg)`;

  requestAnimationFrame(updateClock);
}

updateClock();

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
  const fallSpeed = 1 + Math.random() * 2;

  function snowfall() {
    topPosition += fallSpeed;
    snowflake.style.top = `${topPosition}px`;

    const windowHeight = window.innerHeight;
    if (topPosition < windowHeight - randomSize) {
      requestAnimationFrame(snowfall);
    } else {
      snowflake.style.top = `${windowHeight - randomSize}px`;

      const increaseInterval = setInterval(() => {
        const flakeWidth = parseFloat(snowflake.style.width);
        const flakeHeight = parseFloat(snowflake.style.height);
        snowflake.style.width = `${flakeWidth + 0.1}px`;
        snowflake.style.height = `${flakeHeight + 0.1}px`;

        // Обновление координаты top при увеличении размера
        topPosition -= 0.1;
        snowflake.style.top = `${topPosition}px`;

        if (topPosition < -flakeHeight) {
          clearInterval(increaseInterval);
          snowflake.remove(); // Удаляем снежинку после завершения анимации
        }
      }, 1000);
    }
  }

  snowfall();
}

setInterval(createSnowflake, 100);
