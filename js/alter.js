$(function(){
	
	$("tbody tr td button").eq(0).on("click",function(){
		var id = localStorage.getItem("id");
		$("tbody tr td input").eq(0).val(id);
		var movName=$("input[name='movName']").innerHTML;
		var price = $("input[name='price']").innerHTML;
		var playTime = $("input[name='playTime']").innerHTML;
		var seat =$("input[name='seat']").innerHTML;
		var movie = new movies(id,movName,price,platTime,seat);
		alert(movie);
		changeMovies(movie,function(result){
			alert("修改成功!")
			window.location.reload("showPage.html");
		})
	})
})
