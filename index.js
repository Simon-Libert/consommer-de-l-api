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

/* const url = 'https://reqres.in/api/users?page=2';
async function getUsers() {
	const request = await fetch(url, {
		method: 'GET',
	});

	if (!request.ok) {
		alert("y'a une couille dans l'beurre!");
	} else {
		let datas = await request.json(); */ // on récupère les données en json et on en fait un objet js;
/* console.log(datas); */
/* datas.data.map((item) => {
			let html = `
			  <h2>${item.first_name} ${item.last_name} ${item.id}</h2>
			  <p>${item.email}</p>
			`;
			document.querySelector('.users').insertAdjacentHTML('beforeend', html);
		}); */
/* document.querySelector('.users').textContent = datas.data[0].email; */
//console.log(datas.data);
/* 	}
	// on va stocker fetch dans variable : const request;
	//await veur dire qu'on va attendre fetch
}

getUsers(); */
