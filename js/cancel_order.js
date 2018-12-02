function cancelOrder(e){
	e.preventDefault();

	// grab the submitted values
	let id = document.getElementById('order_id').value;

	fetch(`https://sendit-olusola.herokuapp.com/api/v1/parcels/${id}/cancel`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		// send the request body
		body: JSON.stringify({
			id,
		})
	})
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch(err => console.log(err))
}

document.getElementById('cancel_order_form').addEventListener('submit', cancelOrder);