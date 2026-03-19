//your JS code here. If required.
let fn=document.getElementById("FirstName");
let ln=document.getElementById("LastName");
let pn=document.getElementById("PhoneNumber");
let mail=document.getElementById("EmailID");
let submit=document.getElementById("submit");

function sub(){
	alert(`First Name: ${fn.value} Last Name: ${ln.value} 
	Phone Number: ${pn.value} Email ID: ${mail.value}`);
}
