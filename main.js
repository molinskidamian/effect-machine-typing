const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const area = document.querySelector('.area');
const spans = document.querySelectorAll('span');
const text = [
    "Są dwie drogi, aby przeżyć życie. Jedna to żyć tak, jakby nic nie było cudem. Druga to żyć tak, jakby cudem było wszystko.",
    "Martw się, co inni ludzie o tobie myślą, a zawsze będziesz ich więźniem.",
    "Jeżeli robisz to co łatwe, Twoje życie będzie trudne. Jeśli robisz to co trudne, Twoje życie będzie łatwe.",
    "Jest tylko jedna rzecz, która sprawia, że marzenie jest niemożliwe do osiągnięcia: strach przed porażką.",
    "Dramatem życia jest to, że starzejemy się zbyt szybko, a mądrzejemy zbyt późno.",
    "Nigdy nie rezygnuj z marzenia, tylko dlatego, że zrealizowanie go wymaga czasu. Czas i tak upłynie.",
];
const caret = document.querySelector('.caret');
const active = document.querySelector('.active');
const flickerTime = 400;
const time = 100;
let timeoutIndex;

let activeLetter = 0;
let activeText = 0;

const machineTyping = () => {
  text.push("Koniec wiadomości...");

  if (activeText === text.length) return;
  area.textContent += text[activeText][activeLetter];
  activeLetter++;

  if(activeLetter === text[activeText].length) {
    return setTimeout(() => {
      activeText++;
      activeLetter = 0;
      area.textContent = "";
      machineTyping();

    }, 2000);
  }

  timeoutIndex = setTimeout(machineTyping, time);
};




start.addEventListener('click', machineTyping);

stop.addEventListener('click', () => {
  clearTimeout(timeoutIndex);
  console.log(`Zatrzymano ${timeoutIndex}`);

});





const flickerCaret = () => {
  caret.classList.toggle('active');
};

const flicker = setInterval(flickerCaret, flickerTime);
