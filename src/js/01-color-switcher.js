function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const bodyRef = document.body;
  const btnStartRef = document.querySelector("[data-start]");
  const btnStopRef = document.querySelector("[data-stop]");
  let timerId = null;
  function changeBgColor(){
    const hex = getRandomHexColor();
    bodyRef.style.backgroundColor = hex;
  }

  function onStartBtn(){
    timerId = setInterval(changeBgColor, 1000);
    btnStartRef.disabled = true; 
  }

  function onStopBtn(){
    clearInterval(timerId);
    btnStartRef.disabled = false; 
  }
  

  btnStartRef.addEventListener('click', onStartBtn);
  btnStopRef.addEventListener('click', onStopBtn);
