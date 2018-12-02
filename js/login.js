function logIn(e){
	e.preventDefault();

	// grab the submitted values
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;


	fetch('https://sendit-olusola.herokuapp.com/api/v1/auth/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			// 'Authorization': `Bearer ${token}`
		},
		// send the request body
		body: JSON.stringify({
			email, password,
		}),
	})
	.then((res) => res.json())
	.then((userData) => {
		const token = userData.data[0].token;
		document.cookie = `Token = ${token}`;
		console.log(document.cookie);
	})
	.catch(err => console.log(err))
}

document.getElementById('login_form').addEventListener('submit', logIn);