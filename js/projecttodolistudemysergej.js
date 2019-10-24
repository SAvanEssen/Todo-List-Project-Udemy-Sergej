//Inspired by Udemy Course by Colt Steele

// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on dumpster to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});// This jQuery I need to change, instead of removing the Todo Item, I want it to move to Deleted Todo Items
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul, append jQuery command to add content to HTML
		$("ul").append("<li><span><i class='fas fa-dumpster'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

//Going to add functionality through jQuery for recycling removed Todo Items. 
//Once deleted they should go to the second list.
//Once in the second list I want to have 2 options, erase permenantly (write to database optional) or recycle.
//Erase permanently speaks for itself, recycle moves it back to the Todo List.