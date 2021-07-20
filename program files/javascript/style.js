	function validateForm() {
		var fname = document.forms["messageForm"]["fname"].value;
		var lname = document.forms["messageForm"]["lname"].value;
		var address = document.forms["messageForm"]["address"].value;
		var email = document.forms["messageForm"]["email"].value;
		var comment = document.forms["messageForm"]["comment"].value;
		
		if (fname =="" ||lname =="" ||address =="" ||email =="" ||comment =="") {
			alert("Please fill the field");
		}else{
			
			alert("Thank you "+fname+" "+lname);
			alert("Your details: "+
				"Firstname: "+fname+"/n"+
				"Lastname: "+lname+"/n "+
				"Address: "+address+"/n "+
				"Email: "+email+"/n "+
				"Comment: "+ comment);
		}
	}