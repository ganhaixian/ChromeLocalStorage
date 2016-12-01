$(function(){
	//拿到数据并展示出来
	
	
	findAll(function(result){
		for(var i=0; i<result.length; i++){
			var obj = result.item(i)
			var tr = $("tbody tr:hidden").clone().removeAttr("hidden");
			$("tbody").append(tr);
			tr.find("td input").attr("id",obj.id);
			tr.find("td").eq(1).html(obj.movName);
			tr.find("td").eq(2).html("￥  "+obj.price);
			tr.find("td").eq(3).html(obj.playTime);
			tr.find("td").eq(4).html(obj.seat);
		}
	})
	//删除多条数据
	$(".button-edict button").eq(1).on("click",function(){	
		var arr=[];
		//首先选择到id checked
		for(var i=0; i<$("tbody tr td input").length; i++){
			var input = $("tbody tr td input[type='checkbox']")[i];
			if($(input).prop("checked")){
				arr.push($(input).attr("id"));
			}
			
		}		
		deleteSelect(arr);
		//alert("删除成功");
		//刷新页面
		window.location.reload();
	})//删除选中的数据结束
	
	
})//$(function(){}) ending
