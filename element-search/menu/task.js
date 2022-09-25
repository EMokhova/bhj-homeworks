const menuItem = Array.from(document.querySelectorAll('.menu__link'));

for (let item of menuItem) {
	item.onclick = function () {
		const parent = item.parentElement;
		if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parent.querySelector('.menu_sub').className = 'menu menu_sub'
		}

		if (item.closest('.menu_main')) {
			return false
		}
	}
}