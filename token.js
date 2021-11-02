const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(loginForm); // récupérer facilement les valeurs du formulaire;
	const dataToInsert = {};

	formData.forEach((value, key) => {
		dataToInsert[key] = value;
	});

	fetch('https://reqres.in/api/login', {
		method: 'POST',
		body: JSON.stringify(dataToInsert),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json().then((response) => ({ status: res.status, response })))
		.then((result) => {
			localStorage.setItem('myToken', result.response.token);
		});
});
