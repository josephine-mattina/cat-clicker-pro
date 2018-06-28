/* ======= Model ======= */

const model = {
	allCats: [ {
			name:'Scottie',
			img: 'https://blog.visitcairngorms.com/wp-content/uploads/2014/09/Scottish-Wildcat-Kittens-HWP-Oct-13_CreditAlexRiddell.jpg',
			alt: 'Scottish Wild Cat',
			count: 0,
		},
		{
			name:'Mr Lynx',
			img: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6350f08a-e43f-11e7-b046-23180179278b.jpg?crop=6144%2C3456%2C0%2C320&resize=685',
			alt: 'Lynx',
			count: 0,
		},
		{
			name:'Tortie',
			img: 'https://assets.rbl.ms/9225324/980x.jpg',
			alt: 'Tortoiseshell Kitten',
			count: 0,
		},
		{
			name:'Midnight',
			img: 'https://i.imgflip.com/1hsocv.jpg',
			alt: 'Black Cat',
			count: 0,
		},
		{
			name:'Siberia',
			img: 'https://www.pets4homes.co.uk/images/articles/4109/large/siberian-forest-cat-or-norwegian-forest-cat-which-is-best-for-you-591f054e50ff4.jpg',
			alt: 'Norwegian Forest Cat',
			count: 0,
		}
	],

	returnCats: function() {
		const catsArray = model.allCats;
		return catsArray;
	},

	admin: function() {
		const admin = document.querySelector('.admin-form');
		return admin;
	}
};

/* ======= Controller ======= */

const controller = {
	init: function() {
		catsView.init();
		adminView.init();
	},

	getCats: function() {
		return model.returnCats();
	},

	adminHide: function() {
		model.admin().hidden = true;
	},

	adminClick: function() {
		model.admin().hidden = false;
	},

	saveClick: function() {
		const cat = {};
		cat.name = document.querySelector('.name').value;
		cat.img = document.querySelector('.url').value;
		cat.alt = document.querySelector('.alt').value;
		cat.count = document.querySelector('.count').value;

		model.allCats.push(cat);
		catsView.init();
		model.admin().reset();		
		controller.adminHide();
	},

	cancelClick: function() {
		model.admin().reset();
		model.admin().hidden = true;
	}


};

/* ======= View ======= */

const catsView = {
	init: function() {
		const container = document.querySelector('.cats-container');
		const cats = controller.getCats();

		if (container.childElementCount >= 1) {
			container.innerHTML = ``;
		};

		for (let i = 0; i < cats.length; i++) {
			const catName = document.createElement('h3');
			catName.className = 'btn';
			catName.innerHTML = cats[i].name;
			container.appendChild(catName);

			catName.addEventListener('click', (function(cat, i) {
				return function() {
					catsView.render(cat, i);
				}
			})(cats[i], i));
		};
	},

	render: function(cat, i) {
		const photoContainer = document.querySelector('.cats-photos');

		if (photoContainer.childElementCount == 1) {
			photoContainer.innerHTML = ``;
		};

		const catItem = document.createElement('article');
		catItem.className = 'cat-item';
		photoContainer.appendChild(catItem);

		const catName = document.createElement('h3');
		catName.innerHTML = cat.name;
		catItem.appendChild(catName);

		const catImg = document.createElement('img');
		catImg.className = 'cat-img';
		catImg.src = cat.img;
		catImg.alt = cat.alt;
		catItem.appendChild(catImg);

		const catCount = document.createElement('p');
		catCount.className = 'clicks';
		catCount.innerHTML = cat.count + ' clicks';
		catItem.appendChild(catCount);

		const catClick = document.querySelector('.cat-img');

		catClick.addEventListener('click', function() {
			cat.count++;

			const clickText = document.querySelector('.clicks');
			clickText.innerHTML = `${cat.count} clicks`
		});
	}
};

const adminView = {
	init: function() {
		const adminBtn = document.querySelector('.admin-toggle');

		adminBtn.addEventListener('click', function() {
			controller.adminClick();
		});

		const cancelBtn =  document.querySelector('.cancel');

		cancelBtn.addEventListener('click', function(e) {
			e.preventDefault();
			controller.cancelClick();
		});

		const saveBtn =  document.querySelector('.save');
		
		saveBtn.addEventListener('click', function(e) {
			e.preventDefault();
			controller.saveClick();
		});

		controller.adminHide();
	}
};

controller.init();