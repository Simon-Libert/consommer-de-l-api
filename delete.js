function deleteUser(id) {
	fetch(`https://reqres.in/api/users/${id}`, {
		method: 'DELETE',
	}).then((res) => {
		console.log(res.status);
	});
}
