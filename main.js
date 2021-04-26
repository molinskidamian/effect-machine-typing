const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const area = document.querySelector('.area');
const spans = document.querySelectorAll('span');
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
const time = 50;
let intervalIndex = null;
let counter = 0;

const machineTyping = () => {
  // for (let i = 0; i < text.length; i++) {
  //   spans[0].textContent += text[i];
  // }
  spans[0].textContent += text[counter];
  console.log(counter);
  counter++;

  if (counter === text.length) clearInterval(intervalIndex);
};

start.addEventListener('click', () => {
  intervalIndex = setInterval(machineTyping, time);
});

stop.addEventListener('click', () => {
  clearInterval(intervalIndex);
});

const flickerCaret() {
  
}