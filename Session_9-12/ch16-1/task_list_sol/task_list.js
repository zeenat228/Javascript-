"use strict";

$(document).ready(function(){
    var tasks = [];

    var displayTaskList = function() {
        tasks.sort();
        
        $("#task_list").val( tasks.join("\n") );
        $("#task").focus();
    };
    
    $("#add_task").click(function() {   
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            $("#task").focus();
        } else {  
            // add new task to tasks array 
            tasks.push( task ); 

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTaskList();
        }
    });
    
    $("#delete_task").click(function() {   
        var index = parseInt( prompt( "Please enter the index of the task to delete." ) );
        if ( isNaN(index) ) {
            alert( "Please enter a whole number for the index to delete." );
        } else if ( index < 0 || index > tasks.length - 1 ) {
            alert( "There isn't a task with the index you entered." );
        } else {
            tasks.sort();
            tasks.splice( index, 1 );
            displayTaskList(); 
        }
    });
    
    $("#clear_tasks").click(function() {
        tasks = [];
        $("#task_list").val( "" );
        $("#task").focus();
    }); 
    
    // set focus on initial load
    $("#task").focus();
});
