const banner_ul = document.querySelector('.banner ul');
const banners = banner_ul.children;
const btns = document.querySelector('.btns');
const prev = btns.querySelector('.prev');
const next = btns.querySelector('.next');
const pop = document.querySelector('.pop');
const open = banner_ul.querySelectorAll('a');
const close = pop.querySelector('.close');
let num = 0;

init();

prev.addEventListener('click', movePrev);
next.addEventListener('click', moveNext);

open.forEach((btn) => btn.addEventListener('click', (e) => openPop(e)));
close.addEventListener('click', closePop);

function activation() {
	for (const el of banners) el.classList.remove('on');
	banners[3].classList.add('on');
}

function movePrev() {
	banner_ul.prepend(banner_ul.lastElementChild);
	num !== 0 ? --num : (num = banners.length - 1);
	activation();
}

function moveNext() {
	banner_ul.append(banner_ul.firstElementChild);
	num !== banners.length - 1 ? ++num : (num = 0);
	activation();
}

function openPop(e) {
	e.preventDefault();
	const txt = e.currentTarget.closest('li').querySelector('h2').innerText;
	pop.querySelector('h2').innerText = txt;
	pop.classList.add('on');
	e.currentTarget.classList.add('off');
	btns.classList.add('off');
	document.querySelector('header h1').style.color = '#fff';
}

function closePop() {
	pop.classList.remove('on');
	banner_ul.querySelector('li.on a').classList.remove('off');
	btns.classList.remove('off');
	document.querySelector('header h1').style.color = '#777';
}

function init() {
	banner_ul.prepend(banner_ul.lastElementChild);
	banner_ul.prepend(banner_ul.lastElementChild);
	banner_ul.prepend(banner_ul.lastElementChild);
}
