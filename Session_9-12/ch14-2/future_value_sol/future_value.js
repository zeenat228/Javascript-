"use strict";

var calculateFutureValue = function( investment, annualRate, years ) {
    if ( isNaN(investment) || investment <= 0 || isNaN(annualRate) || annualRate <= 0 || isNaN(years) || years <= 0 ) {
		throw new RangeError("All entries must be numbers greater than zero");        
    }
    
//	throw new RangeError("All entries must be numbers greater than zero");
	
    var monthlyRate = annualRate / 12 / 100;
    var months = years * 12;
    var futureValue = 0;
		
    for ( var i = 1; i <= months; i++ ) {
        futureValue = (futureValue + investment) * (1 + monthlyRate);
    }
    return futureValue.toFixed(2);
};

$(document).ready(function(){   
    $("#calculate").click( function() {
         try {
			$("#message").text( "" ); 
	        var investment = parseFloat( $("#investment").val() );
    	    var annualRate = parseFloat( $("#rate").val() );
        	var years = parseInt( $("#years").val() );
             
            var fv = calculateFutureValue(investment, annualRate, years);
            $("#future_value").text( fv ); 
        } 
		catch(error) {
            $("#message").text( error.name + ": " + error.message );
        } 
		finally {
            $("#investment").focus();
            $("#investment").select();
        }
    });
    
    $("#clear").click( function() {
        $("#investment").val( "" );
        $("#rate").val( "" );
        $("#years").val( "" );
        $("#future_value").text( "" ); 
        $("#message").text( "" ); 

        $("#investment").focus();
    });
    
    // set focus on initial load
    $("#investment").focus();
});