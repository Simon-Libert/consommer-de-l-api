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

	document.getElementById('passWord').addEventListener('click', () => {
		localStorage.setItem(
			'myToken',
			JSON.stringify(
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
			)
		);
	});

	let token = JSON.parse(localStorage.getItem('myToken'));
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Authentication', `Bearer ${token}`);

	fetch('https://reqres.in/api/login', {
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify(dataToInsert),
		headers: myHeaders,
	})
		.then((res) => res.json().then((response) => ({ status: res.status, response })))
		.then((result) => {
			console.log(result);
		});
});
