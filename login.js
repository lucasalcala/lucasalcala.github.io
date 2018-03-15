
/*
	Script that validates the username and password from the users input
	
*/

// Variable to count number of attempts.
var attempt = 3;

// Below function Executes on click of login button.
function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if ( username == "marriott" && password == "marriott2018")
	{
		window.location = "main.html"; // Redirecting to other page.
		return false;
	}
	else
	{
		attempt --;// Decrementing by one.
		alert("Lo siento, la contraseña es incorrecta. Tienes "+attempt+" intentos");
		// Disabling fields after 3 attempts.
		if( attempt == 0)
		{
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
		return false;
		}
	}
}