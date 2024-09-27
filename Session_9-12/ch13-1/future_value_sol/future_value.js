$(document).ready(function() {
	
	var getRandomNumber = function(max) {
    	var random;
    	if (!isNaN(max)) {
        	random = Math.random(); // value >= 0.0 and < 1.0
        	random = Math.floor(random * max); // value is an integer between 0 and max - 1
        	random = random + 1; // value is an integer between 1 and max
    	}
    	return random;
	};
	
	var getDate = function() {
		var currentDate = new Date();
		// get the date parts 
		var month = currentDate.getMonth() + 1;
		if (month < 10) {
			month = "0" + month;
		}
		var day = currentDate.getDate();
		if (day < 10) {
			day = "0" + day;
		}
		var year = currentDate.getFullYear();
		var dateString = "Today is " + month + "/" + day + "/" + year + " at ";
		// get the time parts
		var hours = currentDate.getHours();
		var minutes = currentDate.getMinutes();
		if (minutes < 10) {
			minutes = "0" + minutes; // pad minutes
		}
		var dateString = "Today is " + month + "/" + day + "/" + year;
		dateString += " at " + hours + ":" + minutes + ".";	
		return dateString;
	};
	
	var calculateFV = function(investment,rate,years) {
		var futureValue = investment;
    	for (var i = 1; i <= years; i++ ) {
			futureValue += futureValue * rate / 100;
			if ( futureValue == Infinity ) {
				alert ("Future Value = " + futureValue + "\n i = " + i);
				i = years;
			}
		}
//		alert ("The maximum value for a JavaScript number is \n" + Number.MAX_VALUE);
	   	futureValue = futureValue.toFixed(2);
		return futureValue;
	};
	
	var formatFV = function(futureValue) {
		var dotLocation = futureValue.indexOf(".");
		var cents = futureValue.substring(dotLocation + 1, dotLocation + 3);
		var hundreds = futureValue.substring(dotLocation - 3, dotLocation);
		var thousands = "";
		var millions = "";
		if (dotLocation < 6) {
			thousands = futureValue.substring(0, dotLocation - 3);
			millions = "";
		}
		else {
			thousands = futureValue.substring(dotLocation - 6, dotLocation - 3);
			millions = futureValue.substring(0, dotLocation - 6);
		}
		var futureValueFormatted = "";
		if (dotLocation >= 7) {
			futureValueFormatted = "$" + millions + "," + thousands + "," + hundreds + "." + cents;
		}
		else {
			futureValueFormatted = "$" + thousands + "," + hundreds + "." + cents;
		}
		return futureValueFormatted;
	};
	
	$("#calculate").click( function() {
//    	var investment = parseFloat( $("#investment").val() );
//    	var rate = parseFloat( $("#annual_rate").val() );
//    	var years = parseInt( $("#years").val() );
		var futureValue;
		var investment = getRandomNumber(50000);
		$("#investment").val(investment);
		var rate = getRandomNumber(15);
		$("#annual_rate").val(rate);
		var years = getRandomNumber(50);
		$("#years").val(years);
		
		if (isNaN(investment) || investment <= 0) {
			alert("Must be > 0");
		}
		else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
		}	
		else if (isNaN(years) || years <= 0) {
			alert("Must be > 0");
			allValid = false;
		}
		else {
			futureValue = calculateFV(investment,rate,years);
			$("#future_value").val(formatFV(futureValue));
		}
	});
	$("#date").text(getDate());	
    $("#investment").focus();
});
