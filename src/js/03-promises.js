import Notiflix from 'notiflix';

const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');
const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const DELAY = Number(delayRef.value);
  const STEP = Number(stepRef.value);
  const AMOUNT = Number(amountRef.value);
  let stepCounter = DELAY;

  for(let i=1; i <= AMOUNT; i++){
    createPromise(i, stepCounter)
    .then(({ position, delay }) => {
      onSucces(position, delay);
    })
    .catch(({ position, delay }) => {
      onError(position, delay);
    });
    stepCounter += STEP;
  }
}

function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } 
      reject({ position, delay });
      
    }, delay)
  })
}
function onSucces(position, delay){
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 1000,
          });
}
function onError(position, delay){
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 1000,
          });
}