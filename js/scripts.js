var $table = $("#meals");
$.getJSON("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.run.webtask.io/foodmenu")
.done(function(data){
	data = JSON.parse(data);
	console.log(data.length);
	data.forEach(function(meal){
		console.log(meal);
		$table.append("<tr><td>"+meal.name+"</td><td>"+meal.description+"</td><td>"+meal.price+"</td></tr>");
	});
});