$(document).ready(function(){

	$.get("json/webExamples3.json", function(data){
		webSitesSuccess(data);
	});

	$.get("json/customData.json", function(data){
		javascriptsSuccess(data);
	});
/*
	$(".row").each(function(i){
		$(this).append("<div class='col-md-3 col-sm-6 center'><div class='circle center'><div class='front center'><p>Website X</p></div><div class='back center'><p>Website XBACK!</p></div></div></div>");
	});
*/
	function webSitesSuccess(data){
    	var content = "";
    	var amount = data["items"].length;
    	//alert(amount);

    	for(var i in data["items"]){
    		var img = data["items"][i].img;
    		var alt = data["items"][i].alt;
    		var href = data["items"][i].href;
    		var back = data["items"][i].back;
     
    	content += "<a href=\"" +href+ "\"><div class='col-md-3 col-sm-6 center'><div class='flip-container center'><div class='flipper'><div class='circle center'><div class='front center'><img src=\"" +img+ "\" alt=\"" +alt+ "\"></div><div class='back center'><h3>\""+back+"\"</h3></div></div></div></div></div></a>";
    	$(".websContent").html(content);
    	}
    }

    function javascriptsSuccess(data){
    	var content = "";
    	var amount = data["items"].length;
    	//alert(amount);

    	for(var i in data["items"]){
    		var img = data["items"][i].img;
    		var alt = data["items"][i].alt;
    		var href = data["items"][i].href;
    		var back = data["items"][i].back;
     	
    	content += "<a href=\"" +href+ "\"><div class='col-md-3 col-sm-6 center'><div class='flip-container center'><div class='flipper'><div class='circle center'><div class='front center'><img src=\"" +img+ "\" alt=\"" +alt+ "\"></div><div class='back center'><h3>\""+back+"\"</h3></div></div></div></div></div></a>";
    	$(".jsContent").html(content);
    	}
    }
/*
	function customDataSuccess(data){
    	var content = "";
    	var amount = data["items"].length;
    	alert(amount);

    	for(var i in data["items"]){
    		var img = data["items"][i].img;
    		var alt = data["items"][i].alt;
    		var href = data["items"][i].href;
    		var back = data["items"][i].back;
     
    	content += "<a href=\"" +href+ "\"><div class='flip-container'><div class='flipper'><div class='front'><img src=\"" +img+ "\" alt=\"" +alt+ "\"></div><div class='back'><h3>\""+back+"\"</h3></div></div></div></a>";
    	$(".tester").html(content);
    	}
    }
*/
/*
	$('.row').children().each(function(z){
		alert(z);
	});


function circlesFlip(chunk){
	$(chunk).on("mouseenter", function(){
		$(this).wrap("<div class='flip-container center'><div class='flipper'></div></div>");
	});
};

	function squares(){
		$(this).on("mouseenter", function(){
		alert($(this));
		//$(this).wrap("<div class='flip-container center'><div class='flipper'></div></div>");
		};
	});*/
});
/*
	$("div.circle").parent().on("mouseleave", function(){
		$(".circle").children(".flip-container").children(".flipper").unwrap();
	});
});
*/