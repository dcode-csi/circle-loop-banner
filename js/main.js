const banner_ul = document.querySelector('.banner ul');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

banner_ul.prepend(banner_ul.lastElementChild);
banner_ul.prepend(banner_ul.lastElementChild);
banner_ul.prepend(banner_ul.lastElementChild);

prev.addEventListener('click', (e) => {
	banner_ul.prepend(banner_ul.lastElementChild);
});

next.addEventListener('click', (e) => {
	banner_ul.append(banner_ul.firstElementChild);
});
