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

	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Authorization', '1234abcd');
	fetch('https://https://reqres.in/api/register.in/api/users', {
		method: 'POST',
		body: JSON.stringify(dataToInsert),
		headers: {
			Accept: myHeaders,
		},
	})
		.then((res) => res.json().then((response) => ({ status: res.status, response })))
		.then((result) => {
			console.log(result);
		});
});
