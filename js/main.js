function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		alert("Hello General!")
	} 
		else {
		alert ("You are not the General!")
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult');
	} else if (userAge>=13) {
		console.log('User is a teenager');
	} else {
		console.log('Go away child');
	}

	$('h2').text('Hello ' + fullName);

}


// when the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	// hide all the content
	$('h3').next().hide();

	// when the user clicks an h3
	$('h3').on('click', function() {

		// hide the next element
		$(this).next().slideToggle(200);

	});

});