const usersBlock = document.querySelector('.users');

async function getUsers() {
	await fetch('https://reqres.in/api/users?page=2')
		.then((res) => res.json())
		.then((result) => {
			const users = result.data; // then = call back, tout ce qui est dans le callback reste à l'int;
			if (users.length > 0) {
				users.forEach((user) => {
					const html = `
                        <div>
                            <p>${user.id} - ${user.last_name} ${user.first_name}</p>
                            <p>${user.email}</p>
                            <img src="${user.avatar}" alt="user-${user.id}-avatar">
							<a href="./update.html?user=${user.id}">
								<button type="button">Modifier</button>
							</a>
							<button type="button" onClick="deleteUser(${user.id})">Supprimer</button>
                        </div>
                    `;
					usersBlock.innerHTML += html; // += vaut unifier;
				});
			}
			console.log(result.data);
		});
}

getUsers();
