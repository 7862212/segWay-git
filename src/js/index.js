// ============================ БУРГЕР =====================
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function () {
	this.classList.toggle("close");
	overlay.classList.toggle("overlay");
});

// ========================== SLIDER BOTTOM =================
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

//======================================= TAB ============================================

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
});


//=====================     tabs-warranty             ===============================

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const tabs = () => { // объявляем основную функцию для вкладок, чтобы вся логика была в одном месте
		const head = document.querySelector('.tabs-warranty__head') // ищем элемент с кнопками и записываем в константу
		const body = document.querySelector('.tabs-warranty__body') // ищем элемент с контентом и записываем в константу

		const getActiveTabName = () => { // объявляем функцию для получения названия активной вкладки
			return head.querySelector('.tabs-warranty__tab-warranty_active').dataset.tab // возвращаем значение data-tab активной кнопки
		};

		const setActiveContent = () => { // объявляем функцию для установки активного элемента контента
			if (body.querySelector('.tabs-warranty__content-warranty_active')) { // если уже есть активный элемент контента
				body.querySelector('.tabs-warranty__content-warranty_active').classList.remove('tabs-warranty__content-warranty_active') // то скрываем его
			}
			body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('tabs-warranty__content-warranty_active') // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
		};

		// проверяем при загрузке страницы, есть ли активная вкладка
		if (!head.querySelector('.tabs-warranty__tab-warranty_active')) {  // если активной вкладки нет
			head.querySelector('.tabs-warranty__tab-warranty').classList.add('tabs-warranty__tab-warranty_active') // то делаем активной по-умолчанию первую вкладку
		}

		setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы

		head.addEventListener('click', e => { // при клике на .tabs__head
			const caption = e.target.closest('.tabs-warranty__tab-warranty') // узнаем, был ли клик на кнопке
			if (!caption) return // если клик был не на кнопке, то прерываем выполнение функции
			if (caption.classList.contains('tabs-warranty__tab-warranty_active')) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем

			if (head.querySelector('.tabs-warranty__tab-warranty_active')) { // если уже есть активная кнопка
				head.querySelector('.tabs-warranty__tab-warranty_active').classList.remove('tabs-warranty__tab-warranty_active') // то удаляем ей активный класс
			}

			caption.classList.add('tabs-warranty__tab-warranty_active') // затем добавляем активный класс кнопке, на которой был клик

			setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой
		});
	}

	tabs(); // вызываем основную функцию

});

//===================== tabs-warranty ++++++доп блоки ===============================

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const tabs = (tabsSelector, tabsHeadSelector, tabsBodySelector, tabsCaptionSelector, tabsCaptionActiveClass, tabsContentActiveClass) => { // объявляем основную функцию tabs, которая будет принимать CSS классы и селекторы

		const tabs = document.querySelector(tabsSelector) // ищем на странице элемент по переданному селектору основного элемента вкладок и записываем в константу
		const head = tabs.querySelector(tabsHeadSelector) // ищем в элементе tabs элемент с кнопками по переданному селектору и записываем в константу
		const body = tabs.querySelector(tabsBodySelector) // ищем в элементе tabs элемент с контентом по переданному селектору и записываем в константу

		const getActiveTabName = () => { // функция для получения названия активной вкладки
			return head.querySelector(`.${tabsCaptionActiveClass}`).dataset.tab // возвращаем значение data-tab активной кнопки
		};

		const setActiveContent = () => { // функция для установки активного элемента контента
			if (body.querySelector(`.${tabsContentActiveClass}`)) { // если уже есть активный элемент контента
				body.querySelector(`.${tabsContentActiveClass}`).classList.remove(tabsContentActiveClass) // то скрываем его
			}
			body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add(tabsContentActiveClass) // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
		};

		// проверяем при загрузке страницы, есть ли активная вкладка
		if (!head.querySelector(`.${tabsCaptionActiveClass}`)) { // если активной вкладки нет
			head.querySelector(tabsCaptionSelector).classList.add(tabsCaptionActiveClass) // то делаем активной по-умолчанию первую вкладку
		}

		setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы

		head.addEventListener('click', e => { // при клике на элемент с кнопками
			const caption = e.target.closest(tabsCaptionSelector) // узнаем, был ли клик на кнопке
			if (!caption) return // если клик был не на кнопке, то прерываем выполнение функции
			if (caption.classList.contains(tabsCaptionActiveClass)) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем

			if (head.querySelector(`.${tabsCaptionActiveClass}`)) { // если уже есть активная кнопка
				head.querySelector(`.${tabsCaptionActiveClass}`).classList.remove(tabsCaptionActiveClass) // то удаляем ей активный класс
			}

			caption.classList.add(tabsCaptionActiveClass) // затем добавляем активный класс кнопке, на которой был клик

			setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой
		});
	};

	tabs(
		'.tabs-warranty_e22',
		'.tabs-warranty__head',
		'.tabs-warranty__body',
		'.tabs-warranty__tab-warranty',
		'tabs-warranty__tab-warranty_active',
		'tabs-warranty__content-warranty_active'
	) // вызываем основную функцию tabs для синих вкладок .section__tabs

	tabs(
		'.tabs-warranty_es11',
		'.tabs-warranty__head',
		'.tabs-warranty__body',
		'.tabs-warranty__tab-warranty',
		'tabs-warranty__tab-warranty_active',
		'tabs-warranty__content-warranty_active'
	) // вызываем основную функцию tabs для синих вкладок .section__tabs

	tabs(
		'.tabs-warranty_t15',
		'.tabs-warranty__head',
		'.tabs-warranty__body',
		'.tabs-warranty__tab-warranty',
		'tabs-warranty__tab-warranty_active',
		'tabs-warranty__content-warranty_active'
	) // вызываем основную функцию tabs для зелёных вкладок .about__tabs

});

//======================================== SPECIFIC==========================

class ItcSlider {
	static CLASS_CONTROL = 'slider__control';
	static CLASS_CONTROL_HIDE = 'slider__control_hide';
	static CLASS_ITEM_ACTIVE = 'slider__item_active';
	static CLASS_INDICATOR_ACTIVE = 'active';
	static SEL_WRAPPER = '.slider__wrapper';
	static SEL_ITEM = '.slider__item';
	static SEL_ITEMS = '.slider__items';
	static SEL_PREV = '.slider__control[data-slide="prev"]';
	static SEL_NEXT = '.slider__control[data-slide="next"]';
	static SEL_INDICATOR = '.slider__indicators>li';
	static TRANSITION_OFF = 'slider_disable-transition';

	static contains = [];

	static createInstances() {
		document.querySelectorAll('[data-slider="itc-slider"]').forEach((el) => {
			if (this.contains.find((item) => item.el === el)) {
				return;
			}
			const dataset = el.dataset;
			const params = {};
			Object.keys(dataset).forEach((key) => {
				if (key === 'slider') {
					return;
				}
				let value = dataset[key];
				value = value === 'true' ? true : value;
				value = value === 'false' ? false : value;
				value = Number.isNaN(Number(value)) ? Number(value) : value;
				params[key] = value;
			});
			this.contains.push({ el, slider: new ItcSlider(el, params) });
			el.dataset.sliderId = this.contains.length;
			el.querySelectorAll('.slider__control').forEach((btn) => {
				btn.dataset.sliderTarget = this.contains.length;
			});
		});
	}

	constructor(selector, config) {
		this._el = typeof selector === 'string' ? document.querySelector(selector) : selector;
		this._elWrapper = this._el.querySelector(ItcSlider.SEL_WRAPPER);
		this._elItems = this._el.querySelector(ItcSlider.SEL_ITEMS);
		this._elsItem = this._el.querySelectorAll(ItcSlider.SEL_ITEM);
		this._elsIndicator = this._el.querySelectorAll(ItcSlider.SEL_INDICATOR);
		this._btnPrev = this._el.querySelector(ItcSlider.SEL_PREV);
		this._btnNext = this._el.querySelector(ItcSlider.SEL_NEXT);

		this._exOrderMin = 0;
		this._exOrderMax = 0;
		this._exItemMin = null;
		this._exItemMax = null;
		this._exTranslateMin = 0;
		this._exTranslateMax = 0;

		const styleElItems = window.getComputedStyle(this._elItems);
		this._delay = Math.round(parseFloat(styleElItems.transitionDuration) * 50);

		this._direction = 'next';

		this._intervalId = null;

		this._isSwiping = false;
		this._swipeX = 0;

		this._config = {
			loop: true,
			autoplay: false,
			interval: 5000,
			refresh: true,
			swipe: true,
			...config
		};

		this._setInitialValues();
		this._addEventListener();
	}

	_addEventListener() {
		this._el.addEventListener('click', (e) => {
			this._autoplay('stop');
			if (e.target.classList.contains(ItcSlider.CLASS_CONTROL)) {
				e.preventDefault();
				this._direction = e.target.dataset.slide;
				this._move();
			} else if (e.target.dataset.slideTo) {
				const index = parseInt(e.target.dataset.slideTo, 10);
				this._moveTo(index);
			}
			this._config.loop ? this._autoplay() : null;
		});
		this._el.addEventListener('mouseenter', () => {
			this._autoplay('stop');
		});
		this._el.addEventListener('mouseleave', () => {
			this._autoplay();
		});
		if (this._config.refresh) {
			window.addEventListener('resize', () => {
				window.requestAnimationFrame(this._reset.bind(this));
			});
		}
		if (this._config.loop) {
			this._elItems.addEventListener('itcslider-start', () => {
				if (this._isBalancing) {
					return;
				}
				this._isBalancing = true;
				window.requestAnimationFrame(this._balanceItems.bind(this));
			});
			this._elItems.addEventListener('transitionend', () => {
				this._isBalancing = false;
			});
		}
		const onSwipeStart = (e) => {
			this._autoplay('stop');
			const event = e.type.search('touch') === 0 ? e.touches[0] : e;
			this._swipeX = event.clientX;
			this._isSwiping = true;
		};
		const onSwipeEnd = (e) => {
			if (!this._isSwiping) {
				return;
			}
			const event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
			const diffPos = this._swipeX - event.clientX;
			if (diffPos > 50) {
				this._direction = 'next';
				this._move();
			} else if (diffPos < -50) {
				this._direction = 'prev';
				this._move();
			}
			this._isSwiping = false;
			if (this._config.loop) {
				this._autoplay();
			}
		};
		if (this._config.swipe) {
			this._el.addEventListener('touchstart', onSwipeStart);
			this._el.addEventListener('mousedown', onSwipeStart);
			document.addEventListener('touchend', onSwipeEnd);
			document.addEventListener('mouseup', onSwipeEnd);
		}
		this._el.addEventListener('dragstart', (e) => {
			e.preventDefault();
		});
		document.addEventListener('visibilitychange', () => {
			if (document.visibilityState === 'hidden') {
				this._autoplay('stop');
			} else if (document.visibilityState === 'visible' && this._config.loop) {
				this._autoplay();
			}
		});
	}

	_autoplay(action) {
		if (!this._config.autoplay) {
			return;
		}
		if (action === 'stop') {
			clearInterval(this._intervalId);
			this._intervalId = null;
			return;
		}
		if (this._intervalId === null) {
			this._intervalId = setInterval(() => {
				this._direction = 'next';
				this._move();
			}, this._config.interval);
		}
	}

	_balanceItems() {
		if (!this._isBalancing) {
			return;
		}
		const wrapperRect = this._elWrapper.getBoundingClientRect();
		const targetWidth = wrapperRect.width / this._countActiveItems / 2;
		const countItems = this._elsItem.length;
		if (this._direction === 'next') {
			const exItemRectRight = this._exItemMin.getBoundingClientRect().right;
			if (exItemRectRight < wrapperRect.left - targetWidth) {
				this._exItemMin.dataset.order = this._exOrderMin + countItems;
				const translate = this._exTranslateMin + countItems * this._widthItem;
				this._exItemMin.dataset.translate = translate;
				this._exItemMin.style.transform = `translate3D(${translate}px, 0px, 0.1px)`;
				this._updateExProperties();
			}
		} else {
			const exItemRectLeft = this._exItemMax.getBoundingClientRect().left;
			if (exItemRectLeft > wrapperRect.right + targetWidth) {
				this._exItemMax.dataset.order = this._exOrderMax - countItems;
				const translate = this._exTranslateMax - countItems * this._widthItem;
				this._exItemMax.dataset.translate = translate;
				this._exItemMax.style.transform = `translate3D(${translate}px, 0px, 0.1px)`;
				this._updateExProperties();
			}
		}
		window.setTimeout(() => {
			window.requestAnimationFrame(this._balanceItems.bind(this));
		}, this._delay);
	}

	_changeActiveItems() {
		this._stateItems.forEach((item, index) => {
			if (item) {
				this._elsItem[index].classList.add(ItcSlider.CLASS_ITEM_ACTIVE);
			} else {
				this._elsItem[index].classList.remove(ItcSlider.CLASS_ITEM_ACTIVE);
			}
			if (this._elsIndicator.length && item) {
				this._elsIndicator[index].classList.add(ItcSlider.CLASS_INDICATOR_ACTIVE);
			} else if (this._elsIndicator.length && !item) {
				this._elsIndicator[index].classList.remove(ItcSlider.CLASS_INDICATOR_ACTIVE);
			}
		});
	}

	_move() {
		const widthItem = this._direction === 'next' ? -this._widthItem : this._widthItem;
		const transform = this._transform + widthItem;
		if (!this._config.loop) {
			const limit = this._widthItem * (this._elsItem.length - this._countActiveItems);
			if (transform < -limit || transform > 0) {
				return;
			}
			if (this._btnPrev) {
				this._btnPrev.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);
				this._btnNext.classList.remove(ItcSlider.CLASS_CONTROL_HIDE);
			}
			if (this._btnPrev && transform === -limit) {
				this._btnNext.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
			} else if (this._btnPrev && transform === 0) {
				this._btnPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
			}
		}
		if (this._direction === 'next') {
			this._stateItems = [...this._stateItems.slice(-1), ...this._stateItems.slice(0, -1)];
		} else {
			this._stateItems = [...this._stateItems.slice(1), ...this._stateItems.slice(0, 1)];
		}
		this._changeActiveItems();
		this._transform = transform;
		this._elItems.style.transform = `translate3D(${transform}px, 0px, 0.1px)`;
		this._elItems.dispatchEvent(new CustomEvent('itcslider-start', {
			bubbles: true
		}));
	}

	_moveTo(index) {
		const delta = this._stateItems.reduce((acc, current, currentIndex) => {
			const diff = current ? index - currentIndex : acc;
			return Math.abs(diff) < Math.abs(acc) ? diff : acc;
		}, this._stateItems.length);
		if (delta !== 0) {
			this._direction = delta > 0 ? 'next' : 'prev';
			for (let i = 0; i < Math.abs(delta); i++) {
				this._move();
			}
		}
	}

	_setInitialValues() {
		this._transform = 0;
		this._stateItems = [];
		this._isBalancing = false;
		this._widthItem = this._elsItem[0].getBoundingClientRect().width;
		this._widthWrapper = this._elWrapper.getBoundingClientRect().width;
		this._countActiveItems = Math.round(this._widthWrapper / this._widthItem);
		this._elsItem.forEach((el, index) => {
			el.dataset.index = index;
			el.dataset.order = index;
			el.dataset.translate = 0;
			el.style.transform = '';
			this._stateItems.push(index < this._countActiveItems ? 1 : 0);
		});
		if (this._config.loop) {
			const lastIndex = this._elsItem.length - 1;
			const translate = -(lastIndex + 1) * this._widthItem;
			this._elsItem[lastIndex].dataset.order = -1;
			this._elsItem[lastIndex].dataset.translate = translate;
			this._elsItem[lastIndex].style.transform = `translate3D(${translate}px, 0px, 0.1px)`;
			this._updateExProperties();
		} else if (this._btnPrev) {
			this._btnPrev.classList.add(ItcSlider.CLASS_CONTROL_HIDE);
		}
		this._changeActiveItems();
		this._autoplay();
	}

	_reset() {
		const widthItem = this._elsItem[0].getBoundingClientRect().width;
		const widthWrapper = this._elWrapper.getBoundingClientRect().width;
		const countActiveEls = Math.round(widthWrapper / widthItem);
		if (widthItem === this._widthItem && countActiveEls === this._countActiveItems) {
			return;
		}
		this._autoplay('stop');
		this._elItems.classList.add(ItcSlider.TRANSITION_OFF);
		this._elItems.style.transform = 'translate3D(0px, 0px, 0.1px)';
		this._setInitialValues();
		window.requestAnimationFrame(() => {
			this._elItems.classList.remove(ItcSlider.TRANSITION_OFF);
		});
	}

	_updateExProperties() {
		const els = Object.values(this._elsItem).map((el) => el);
		const orders = els.map((item) => Number(item.dataset.order));
		this._exOrderMin = Math.min(...orders);
		this._exOrderMax = Math.max(...orders);
		const min = orders.indexOf(this._exOrderMin);
		const max = orders.indexOf(this._exOrderMax);
		this._exItemMin = els[min];
		this._exItemMax = els[max];
		this._exTranslateMin = Number(this._exItemMin.dataset.translate);
		this._exTranslateMax = Number(this._exItemMax.dataset.translate);
	}

	next() {
		this._direction = 'next';
		this._move();
	}
	prev() {
		this._direction = 'prev';
		this._move();
	}
	moveTo(index) {
		this._moveTo(index);
	}
	reset() {
		this._reset();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	ItcSlider.createInstances();
});


