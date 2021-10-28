const updateUserForm = document.getElementById('updateUser');
updateUserForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const urlParam = new URLSearchParams(window.location.search);
	if (urlParam.has('user')) {
		const id = parseInt(urlParam.get('user'));

		if (typeof id === 'number' && id >= 1) {
			const formData = new FormData(updateUserForm); // récupérer facilement les valeurs du formulaire;
			const dataToUpdate = {
				avatar: 'http://lorempixel.com/128/128/',
			};

			formData.forEach((value, key) => {
				dataToUpdate[key] = value;
			});

			fetch(`https://reqres.in/api/users/${id}`, {
				method: 'PUT',
				body: JSON.stringify(dataToUpdate),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json().then((response) => ({ status: res.status, response })))
				.then((result) => {
					console.log(result);
				});
		}
	}
});
