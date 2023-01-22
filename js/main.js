const banner_ul = document.querySelector('.banner ul');
const banners = banner_ul.children;
const btns = document.querySelector('.btns');
const prev = btns.querySelector('.prev');
const next = btns.querySelector('.next');
const pop = document.querySelector('.pop');
const open = banner_ul.querySelectorAll('a');
const close = pop.querySelector('.close');
let num = 0;

banner_ul.prepend(banner_ul.lastElementChild);
banner_ul.prepend(banner_ul.lastElementChild);
banner_ul.prepend(banner_ul.lastElementChild);

prev.addEventListener('click', (e) => {
	banner_ul.prepend(banner_ul.lastElementChild);
	num !== 0 ? --num : (num = banners.length - 1);
	activation();
});

next.addEventListener('click', (e) => {
	banner_ul.append(banner_ul.firstElementChild);
	num !== banners.length - 1 ? ++num : (num = 0);
	activation();
});

open.forEach(btn => {
	btn.addEventListener('click', e => {
		e.preventDefault();
		const txt = e.currentTarget.closest('li').querySelector('h2').innerText;
		//const bg = getComputedStyle(e.currentTarget)['background'];

		pop.querySelector('h2').innerText = txt;
		//pop.querySelector('.close').style.background = bg;
		pop.classList.add('on');
		e.currentTarget.classList.add('off');
		btns.classList.add('off');
		document.querySelector('header h1').style.color = '#fff';
	})
})

close.addEventListener('click', e => {
	pop.classList.remove('on');
	banner_ul.querySelector('li.on a').classList.remove('off');
	btns.classList.remove('off');
	document.querySelector('header h1').style.color = '#777';
})

function activation() {
	for (const el of banners) el.classList.remove('on');
	banners[3].classList.add('on');
}
