const banner_ul = document.querySelector('.banner ul');
const banners = banner_ul.children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
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

function activation() {
	for (const el of banners) el.classList.remove('on');
	banners[3].classList.add('on');
}
