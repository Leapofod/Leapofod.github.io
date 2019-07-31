const navBars = document.getElementsByClassName('headerNavBar');


const navItems = [
	/*
	{
		name: 'foo',
		link: 'home.html'
	},
	*/
	{
		name: 'about',
		link: 'about.html',
		dropdowns: []
	},
	{
		name: 'projects',
		link: '#',
		dropdowns: [
			{
				name: 'games',
				link: 'games.html'
			},
			{
				name: 'lessons',
				link: 'lessons.html'
			}
		]
	}
]

loadNavBars();


function loadNavBars() {

	const navLinks = [];

	for (const item of navItems) {

		const listItem = document.createElement('li');
		const itemLink = document.createElement('a');

		itemLink.href = item.link;
		itemLink.innerHTML = item.name.toUpperCase();
		itemLink.classList.add('navBarItem');

		listItem.appendChild(itemLink);

		if (item.dropdowns.length > 0) {

			const dropCont = document.createElement('div');
			const dropdownItems = [];

			for (const dropdown of item.dropdowns) {

				const dropLink = document.createElement('a');

				dropLink.href = dropdown.link;
				dropLink.innerHTML = dropdown.name.toUpperCase();

				dropdownItems.push(dropLink);
			}

			listItem.classList.add('dropdown');
			dropCont.classList.add('dropdownContent');
			dropdownItems.forEach(dropDown => dropCont.appendChild(dropDown));

			listItem.appendChild(dropCont);
		}

		navLinks.push(listItem);
	}

	// Adds Items to Navigation Bar
	for (let i = 0; i < navBars.length; i++) {

		for (const navElm of navLinks) {

			// If 'this' current window's url has the current "button"'s link then it will set it to active mode.

			if (window.location.href.indexOf(navElm.firstChild.href) > -1) {
				navElm.firstChild.classList.add('active');
			}

			navBars.item(i).appendChild(navElm);
		}

	}


}