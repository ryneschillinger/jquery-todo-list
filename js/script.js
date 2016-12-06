$(document).ready(function() {

	// Add a task

	function addNewTask() {
		var inputText = $("#input-text").val();
		var taskRow = $("<div class='task-row'><input type='checkbox' class='checkbox' ><h4>" + inputText + "</h5><button class='delete'>DELETE</button></div>");
		$("#task-list").append(taskRow.clone());
	}

	$("#add").click(function () {
		addNewTask();
		$("#input-text").val("");
	});

	// Delete a task

	$(document).on("click", ".delete", function() {
		$(this).parent().remove();
	});

	// Checking off a task

	$(document).on("click", ".checkbox", function() {
		$(this).parent().find("h4").toggleClass("completed");			
	});	

});