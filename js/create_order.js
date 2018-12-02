function createOrder(e){
	e.preventDefault();

	// grab the submitted values
	let weight = document.getElementById('weight').value;
	let from = document.getElementById('from').value;
	let to = document.getElementById('to').value;
	let currentLocation = document.getElementById('currentLocation').value;

	fetch('https://sendit-olusola.herokuapp.com/api/v1/parcels', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		// send the request body
		body: JSON.stringify({
			weight, from, to, currentLocation,
		})
	})
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch(err => console.log(err))
}

document.getElementById('create_order_form').addEventListener('submit', createOrder);