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
	]
};

const controller = {
	showCat: function() {
		console.log(this);
		view.render();
	},

	init: function() {
		view.init();
	}
};

const view = {
	init: function() {
		const container = document.querySelector('.cats-container');

		// Pretty sure this is incorrect as it directly references model within the view, but it works.
		// How else could I reference the allCats array? Should I rebuild using constructor function and new keyword?
		for (let i = 0; i < model.allCats.length; i++) {
			const catName = document.createElement('h3');
			catName.className = 'btn';
			catName.innerHTML = model.allCats[i].name;
			container.appendChild(catName);

			catName.addEventListener('click', function() {
				controller.showCat();
			});
		};
	},

	render: function() {
		const photoContainer = document.querySelector('.cats-photos');

		if (photoContainer.childElementCount == 1) {
			photoContainer.innerHTML = ``;
		};
		//TODO: how to reference the allCats array??
		// Commented out lines below as console error messages return 'i is not defined'as I don't know how to 
		// as I don't know how to properly reference the array.
		const catItem = document.createElement('article');
		catItem.className = 'cat-item';
		photoContainer.appendChild(catItem);

		const catName = document.createElement('h3');
		// catName.innerHTML = model.allCats[i].name;
		catItem.appendChild(catName);

		const catImg = document.createElement('img');
		catImg.className = 'cat-img';
		// catImg.src = model.allCats[i].img;
		// catImg.alt = model.allCats[i].alt;
		catItem.appendChild(catImg);

		const catCount = document.createElement('p');
		catCount.className = 'clicks';
		// catCount.innerHTML = model.allCats[i].count + ' clicks';
		catItem.appendChild(catCount);
	}
};

controller.init();


// Original code from previous tasks for reference

// function showCats(array) {
// 	const container = document.querySelector('.cats-container');
// 	const photoContainer = document.querySelector('.cats-photos');

// 	for (let i = 0; i < array.length; i++) {
// 		let cat = array[i];

// 		const catName = document.createElement('h3');
// 		catName.className = 'btn';
// 		catName.innerHTML = array[i].name;
// 		container.appendChild(catName);

// 		catName.addEventListener('click', function() {

// 			if (photoContainer.childElementCount == 1) {
// 				photoContainer.innerHTML = ``;
// 			};

// 			const catItem = document.createElement('article');
// 			catItem.className = 'cat-item';
// 			photoContainer.appendChild(catItem);

// 			const catName = document.createElement('h3');
// 			catName.innerHTML = array[i].name;
// 			catItem.appendChild(catName);

// 			const catImg = document.createElement('img');
// 			catImg.className = 'cat-img';
// 			catImg.src = array[i].img;
// 			catImg.alt = array[i].alt;
// 			catItem.appendChild(catImg);

// 			const catCount = document.createElement('p');
// 			catCount.className = 'clicks';
// 			catCount.innerHTML = array[i].count + ' clicks';
// 			catItem.appendChild(catCount);

// 			const catClick = document.querySelector('.cat-img');

// 			catClick.addEventListener('click', function() {
// 				array[i].count++;

// 				const clickText = document.querySelector('.clicks');
// 				clickText.innerHTML = `${array[i].count} clicks`
// 			});
// 		});
// 	}
// }

// showCats(allCats);
