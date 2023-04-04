/*function checkform() {
 	const formElements = document.forms["wf-form-Contact-Form"].elements;
 	let submitBtnActive = true;

 	for (let inputEl = 0; inputEl < formElements.length; inputEl++) {
 		if (formElements[inputEl].value.length == 0) submitBtnActive = false;
 	}

 	if (submitBtnActive) {
 		document.getElementById("demoButton").disabled = false;
 	} else {
 		document.getElementById("demoButton").disabled = "disabled";
 	}
 }*/

 document.getElementById("demoButton").addEventListener("click", validateForm);
 function validateForm() {
  var firstName = document.getElementById("First-name").value;
  var lastName = document.getElementById("Last-Name").value;
  var email = document.getElementById("Email-address").value;
  var phone = document.getElementById("Phone-number").value;
  var company = document.getElementById("Company-Name").value;
  var industry = document.getElementById("Industry").value;
  var delivery = document.getElementById("Delivery").value;
  var vehicles = document.getElementById("Vehicles").value;
  var warehouse = document.getElementById("Warehouse").value;
  var erp = document.getElementById("ERP").value;

  if (firstName == "" || lastName == "" || email == "" || phone == "" || company == "" || industry == "" || delivery == "" || vehicles == "" || warehouse == "" || erp == "") {
    alert("Please fill out all required fields.");
    window.location.reload();    
  } 
}

