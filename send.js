const addUserForm = document.getElementById('addUser');

addUserForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(addUserForm); // récupérer facilement les valeurs du formulaire;
	const dataToInsert = {
		avatar: 'http://lorempixel.com/128/128/',
	};

	formData.forEach((value, key) => {
		dataToInsert[key] = value;
	});

	fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: JSON.stringify(dataToInsert),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json().then((response) => ({ status: res.status, response })))
		.then((result) => {
			console.log(result);
		});
});

//const addUsers = document.getElementById('addUser');

/* const url = 'https://reqres.in/api/users';
function sendInfo() {
	const request = fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded', // permet de recevoir une méthode post, comme si on envoyait un vrai formulaire
		},
		body: new URLSearchParams({ first_name, last_name, email }),
	});

	if (!request.ok) {
		alert("C'est la merde!");
	} else {
		const data = await request.json();
		console.log(data);
	}
} */

// sendInfo();
