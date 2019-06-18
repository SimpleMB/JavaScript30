// const audio = [];
// let audioCounter = 0;

// window.addEventListener("keydown", ({ keyCode }) => {

//   const drum = document.querySelector(`div[data-key="${keyCode}"]`);
//   audio.push(document.querySelector(`audio[data-key="${keyCode}"]`));
//   if (drum || audio[audioCounter]) {
//     drum.classList.toggle("playing");
//     setTimeout(() => {
//       drum.classList.toggle("playing");
//     }, 50);
//     console.log(audio[audioCounter].play())
//     audioCounter++;
//   }
//   console.log(audioCounter)
// });

// let audioNowPlaying = "";

window.addEventListener("keydown", ({ keyCode }) => {
  const drum = document.querySelector(`div[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!drum || !audio) return;
  drum.classList.toggle("playing");
  audio.currentTime = 0;
  audio.play();
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    if(e.propertyName !== "transform") return;
    e.target.classList.remove('playing')
  })
})
