//cursor trail
// const coords = { x: 0, y: 0 };

// window.addEventListener("mousemove", function (e) {
// 	coords.x = e.clientX;
// 	coords.y = e.clientY;

// 	console.log(coords);
// });
//https://www.youtube.com/watch?v=IKOwKiVt_x8&list=PL4FL-XepWXttYviyLh0yEiNOhAj_qCYs4&index=14

const toggle = document.querySelector('#toggleButton');
const toggleLabel = document.querySelector('#toggleLabel');

toggle.addEventListener('change', toggleChanged);

function toggleChanged() {
	if (toggle.checked) {
		document.body.classList.add('light-mode');
		toggleLabel.innerText = 'Light Mode';
	} else {
		document.body.classList.remove('light-mode');
		toggleLabel.innerText = 'Dark Mode';
	}
}

//carousel time woooooooo

// const imgs = [];

// const leftArrow = document.querySelector('#left-arrow');
// const rightArrow = document.querySelector('#right-arrow');
// const currentPhoto = document.querySelector('#current-photo');

// leftArrow.addEventListener('click', moveLeft);
// rightArrow.addEventListener('click', moveRight);
// let i = 0;

// function moveLeft() {
// 	i = i === 0 ? imgs.length - 1 : i - 1;
// 	currentPhoto.setAttribute('src', imgs[i]);
// }
