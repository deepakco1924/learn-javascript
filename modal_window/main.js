'use strict';
const btns = document.querySelectorAll('.show-modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btn = document.querySelector('.close-modal');
console.log(btns);
function utilityAddHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function utilityRemoveHidden() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', utilityRemoveHidden);
}
btn.addEventListener('click', utilityAddHidden);
overlay.addEventListener('click', utilityAddHidden);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    utilityAddHidden();
  }
});
