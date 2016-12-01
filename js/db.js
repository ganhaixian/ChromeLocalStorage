/*创建数据库和函数声明*/
function getDB(){
	var db = window.openDatabase("movie",1,"这是电影购票数据存储",1024*1024*4);
	return db;
}
$(function(){
	
	//修改页面底部的更新对应时间
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var da = date.getDate();
	$("small span").eq(0).html(year+"年");
	$("small span").eq(1).html((month+1)+"月");
	$("small span").eq(2).html(da+"日");
	
	
	
	
	//创建数据库
	var db = getDB();
	db.transaction(function(trans){
		trans.executeSql("create table if not exists movieBuyer(id integer PRIMARY KEY,movName text NO NULL,price intrger, playTime text NOT NULL,seat text NOT NULL)",[])
	})
})

function movies(id, movName, price, playTime, seat){
	this.id=id;
	this.movName=movName;
	this.price=price ;
	this.playTime=playTime;
	this.seat=seat;
}


//保存数据
function saveMassege(movies,handle){
	var db = getDB();
	db.transaction(function(trans){
		//插入数据操作
		var sql = "insert into movieBuyer values(?,?,?,?,?)";
		trans.executeSql(sql,[movies.id,movies.movName,movies.price,movies.playTime,movies.seat],function(){
			handle("保存成功！")
		})
	})
}

function findAll(handle){
	var db = getDB();
	db.transaction(function(trans){
		var sql = "select * from movieBuyer";
		trans.executeSql(sql,[],function(trans,result){
			handle(result.rows);
		})
	})
}

function deleteSelect(arr){
	var db = getDB();
	db.transaction(function(trans){
		for(var i=0; i<arr.length; i++){
			var sql = "delete from movieBuyer where id=?";
			trans.executeSql(sql,[arr[i]]);
			
		}
		//alert(arr);
	})
}

//修改电影基本信息
function changeMovies(movie,handle){
	var db = getDB();
	db.transaction(function(trans){
		var sql = "update moviesBuyer set id=?, movName=?, price=?, playTime=?, seat=? where id=?";
		trans.executeSql(sql,[movies.id,movies.movName,movies.price,movies.playTime, movies.seat],function(){
			handle("修改成功");
		},function(trans,err){
			console.log(err);
		})
	})
}

