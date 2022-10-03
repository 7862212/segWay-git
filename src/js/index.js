let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function () {
	this.classList.toggle("close");
	overlay.classList.toggle("overlay");
});


let offset = 0;
const sliderLine = document.querySelector('.reviews__slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
	offset = offset + 276;
	if (offset > 828) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
	offset = offset - 276;
	if (offset < 0) {
		offset = 828;
	}
	sliderLine.style.left = -offset + 'px';
});

//===============================================================

document.querySelectorAll('.warranty').forEach((e) => {

	let tabTabs = e.querySelectorAll('.warranty-tabs .warranty-tab');
	let tabContent = e.querySelectorAll('.warranty-content .warranty-block-content');

	for (let i = 0; i < tabTabs.length; i++) {
		tabTabs[0].click();
		tabTabs[i].onclick = () => {
			tabTabs.forEach((e) => { e.classList.remove('warranty-tab_active') });
			tabContent.forEach((e) => { e.classList.remove('warranty-block-content_active') });
			tabTabs[i].classList.add('warranty-tab_active');
			tabContent[i].classList.add('warranty-block-content_active');
		};
	}
});


//function initTabs(tabsContainer) {
//	const activeTabClass = 'active';
//	const activeContainerClass = 'active';
//	const tabs = tabsContainer.querySelectorAll('.warranty-tab');
//	const containers = tabsContainer.querySelectorAll('.warranty-block-content');

//	function activateTab(identifier) {
//		let tabToActivate;
//		let containerToActivate;
//		tabs.forEach(tab => {
//			tab.classList.remove(activeTabClass);
//			if (tab.dataset.tab == identifier) {
//				tabToActivate = tab;
//			}
//		});
//		containers.forEach(container => {
//			container.classList.remove(activeContainerClass);
//			if (container.dataset.container == identifier) {
//				containerToActivate = container;
//			}
//		});
//		tabToActivate.classList.add(activeTabClass);
//		containerToActivate.classList.add(activeContainerClass);
//	}

//	activateTab(tabs[0].dataset.tab);

//	tabs.forEach(tab => {
//		tab.addEventListener('click', () => {
//			activateTab(tab.dataset.tab);
//		});
//	});
//}

//initTabs(document.querySelectorAll('.warranty')[0]);
//initTabs(document.querySelectorAll('.warranty')[1]);




//============================ SLIDER ======================================

function slider(selector) {
	let slider = $(selector);
	let imgs = slider.children();

	slider
		.addClass('slider')
		.append('<a href="#" class="slider__arrow slider__arrow_left"></a>')
		.append('<div class="slider__slides"></div>')
		.append('<div class="slider__dots"></div>')
		.append('<a href="#" class="slider__arrow slider__arrow_right"></a>')
		.on('click', '.slider__arrow, .slider__dot', function (e) {
			e.preventDefault();

			let a = $(this);
			let active = slider.find('.slider__slide_active');
			let current = active.index();
			let next = current;

			if (a.hasClass('slider__arrow_left')) {
				next = current - 1 >= 0 ? current - 1 : imgs.length - 1;
			} else if (a.hasClass('slider__arrow_right')) {
				next = (current + 1) % imgs.length;
			} else {
				next = a.index();
			}

			if (current == next) {
				return;
			}

			active.removeClass('slider__slide_active');
			slider.find('.slider__dot_active').removeClass('slider__dot_active');
			imgs.eq(next).addClass('slider__slide_active');
			slider.find('.slider__dot').eq(next).addClass('slider__dot_active');
		});

	let slides = slider.children('.slider__slides');
	let dots = slider.children('.slider__dots');

	imgs.prependTo(slides).each(function (i) {

		if (!i) {
			dots.append('<a href="#" class="slider__dot slider__dot_active"></a>');

		} else {
			dots.append('<a href="#" class="slider__dot"></a>');
		}
	})
		.addClass('slider__slide')
		.eq(0)
		.addClass('slider__slide_active');
}

slider('#slider');
slider('#slider-2');
slider('#slider-3');
slider('#slider-4');
slider('#slider-5');
slider('#slider-6');

//===================================================================================

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const tabs = () => { // объявляем основную функцию для вкладок, чтобы вся логика была в одном месте
		const tab = document.querySelector('.tabs-kickscooter') // ищем элемент с кнопками и записываем в константу
		const content = document.querySelector('.contents-kickscooter') // ищем элемент с контентом и записываем в константу

		const getActiveTabName = () => { // объявляем функцию для получения названия активной вкладки
			return tab.querySelector('.tabs-kickscooter__tab-kickscooter_active').dataset.tab // возвращаем значение data-tab активной кнопки
		}

		const setActiveContent = () => { // объявляем функцию для установки активного элемента контента
			if (content.querySelector('.contents-kickscooter__content-kickscooter_active')) { // если уже есть активный элемент контента
				content.querySelector('.contents-kickscooter__content-kickscooter_active').classList.remove('contents-kickscooter__content-kickscooter_active') // то скрываем его
			}
			content.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('contents-kickscooter__content-kickscooter_active') // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
		}

		// проверяем при загрузке страницы, есть ли активная вкладка
		if (!tab.querySelector('.tabs-kickscooter__tab-kickscooter_active')) {  // если активной вкладки нет
			tab.querySelector('.tabs-kickscooter__tab-kickscooter').classList.add('tabs-kickscooter__tab-kickscooter_active') // то делаем активной по-умолчанию первую вкладку
		}

		setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы

		tab.addEventListener('click', e => { // при клике на .tabs__head
			const caption = e.target.closest('.tabs-kickscooter__tab-kickscooter') // узнаем, был ли клик на кнопке
			if (!caption) return // если клик был не на кнопке, то прерываем выполнение функции
			if (caption.classList.contains('tabs-kickscooter__tab-kickscooter_active')) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем

			if (tab.querySelector('.tabs-kickscooter__tab-kickscooter_active')) { // если уже есть активная кнопка
				tab.querySelector('.tabs-kickscooter__tab-kickscooter_active').classList.remove('tabs-kickscooter__tab-kickscooter_active') // то удаляем ей активный класс
			}

			caption.classList.add('tabs-kickscooter__tab-kickscooter_active') // затем добавляем активный класс кнопке, на которой был клик

			setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой
		})
	}

	tabs() // вызываем основную функцию

})





