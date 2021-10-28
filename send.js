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
