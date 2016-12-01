$(function(){
	//提交保存数据
	$("form button").eq(0).click(function(){
		var id = $("input[name='id']").val();
		//alert(id);
		var movName = $("input[name='movName']").val();
		var price = $("input[name='price']").val();
		var playTime = $("input[name='playTime']").val();
		var seat = $("input[name='seat']").val();
		var movie = new movies(id,movName,price,playTime,seat);
		//保存
		if(movie.id && movie.movName && movie.price && movie.playTime && movie.seat){
			saveMassege(movie,function(result){
			//alert(result);
			var id = $("input[name='id']").val("");		
			var movName = $("input[name='movName']").val("");
			var price = $("input[name='price']").val("");
			var playTime = $("input[name='playTime']").val("");
			var seat = $("input[name='seat']").val("");
		})
		}		
	})
	
	
})
