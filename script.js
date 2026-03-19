//your JS code here. If required.
function sub(event){
	event.preventDefault(); // prevent page reload

	let fn = document.getElementById("FirstName").value;
	let ln = document.getElementById("LastName").value;
	let pn = document.getElementById("PhoneNumber").value;
	let mail = document.getElementById("EmailID").value;

	alert(`First Name: ${fn} Last Name: ${ln} Phone Number: ${pn} Email ID: ${mail}`);
}