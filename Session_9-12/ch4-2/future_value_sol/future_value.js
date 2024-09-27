var check = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(investment,rate,years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
};

var processEntries = function() {
    var investment = parseFloat( check("investment").value );
    var rate = parseFloat( check("rate").value );
    var years = parseInt( check("years").value );
    var error = "";

    if (isNaN(investment) || investment <= 0 || investment > 100000) {
    	error = "Investment must be a number greater than zero and less than or equal to 100,000";
    	check("investment").focus();
    }
    else if (isNaN(rate) || rate <= 0 || rate > 15) {
    	error = "Rate must be a number greater than zero and less than or equal to 15";
    	check("annual_rate").focus();
    }
    else if (isNaN(years) || years <= 0 || years > 50) {
    	error = "Years must be a number greater than zero and less than 50";
    	check("years").focus();
    }
    
    if (error == "") {
        check("future_value").value = calculateFV(investment,rate,years);
    }
    else {
    	alert(error);
    }
};

window.onload = function() {
    check("calculate").onclick = processEntries;
    check("investment").focus();
};