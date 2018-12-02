function signUp(e){
	e.preventDefault();

	// grab the submitted values
	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	let othernames = document.getElementById('othernames').value;
	let username = document.getElementById('username').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	fetch('https://sendit-olusola.herokuapp.com/api/v1/auth/signup', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		},
		// send the request body
		body: JSON.stringify({
			firstname:firstname, lastname:lastname, username:username, othernames:othernames, email:email, password:password
		})
	})
	.then((res) => res.json())
	.then((data) => console.log(data.status))
	.catch(err => console.log(err))
}

document.getElementById('signup_form').addEventListener('submit', signUp);