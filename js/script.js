const accordion = document.querySelector('.accordion');
const box = document.querySelector('.box');
const headers = document.querySelectorAll('.accordion__header');

accordion.addEventListener('click', function (event) {
	if (event.target.matches('.accordion__header')) {
		let active = this.querySelector('.active');

		if (active == event.target) {
			event.target.classList.toggle('active');
		} else {
			if (active) {
				active.classList.remove('active');
			}
			event.target.classList.add('active');
		}
	}
});

headers.forEach((header) => {
	header.addEventListener('mouseenter', () => {
		box.classList.add('box--active');
	});
});

headers.forEach((header) => {
	header.addEventListener('mouseleave', () => {
		box.classList.remove('box--active');
	});
});
