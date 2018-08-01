$(document).ready(function(){

	$.get("./json/websExamples.json", function(data){
		webSitesSuccess(data);
	});

	$.get("./json/jsExamples.json", function(data){
		javascriptsSuccess(data);
	});

    $.get("./json/illsExamples.json", function(data){
        illsSuccess(data);
    });

    $.get("./json/vidsExamples.json", function(data){
        vidsSuccess(data);
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

            var spaceFloatNum = 'spaceFloatStop';
            var spaceFloatNumR = 'spaceFloat'+Math.floor(Math.random()*4+1);
     
    	content += "<a href=\"" +href+ "\" target='_blank'><div class='col-md-3 col-sm-6 center'><div class='flip-container center'><div class='flipper'><div class='circle center'><div class='front center\ "+spaceFloatNum+"'><img src=\"" +img+ "\" alt=\"" +alt+ "\"></div><div class='back center'><p>\""+back+"\"</p></div></div></div></div></div></a>";
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

            var spaceFloatNum = 'spaceFloatStop';
            var spaceFloatNumR = 'spaceFloat'+Math.floor(Math.random()*4);
     	
    	content += "<a href=\"" +href+ "\" target='_blank'><div class='col-md-3 col-sm-6 center'><div class='flip-container center'><div class='flipper'><div class='circle center'><div class='front center\ "+spaceFloatNum+"'><img src=\"" +img+ "\" alt=\"" +alt+ "\"></div><div class='back center'><p>\""+back+"\"</p></div></div></div></div></div></a>";
    	$(".jsContent").html(content);
    	}
    }

/*
    function illsSuccess(data){
        var content = "";
        var amount = data["items"].length;
        //alert(amount);

        for(var i in data["items"]){
            var img = data["items"][i].img;
            var alt = data["items"][i].alt;
            var href = data["items"][i].href;
            var back = data["items"][i].back;

            var spaceFloatNum = 'spaceFloatStop';
            var spaceFloatNumR = 'spaceFloat'+Math.floor(Math.random()*4);
        
        content += "<a href=\"" +href+ "\" target='_blank'><div class='col-md-3 col-sm-6 center'><div class='flip-container center'><div class='flipper'><div class='circle center'><div class='front center\ "+spaceFloatNum+"'><img src=\"" +img+ "\" alt=\"" +alt+ "\"></div><div class='back center'><p>\""+back+"\"</p></div></div></div></div></div></a>";
        $(".illsContent").html(content);
        }
    }
*/

    function vidsSuccess(data){
        var content = "";
        var amount = data["items"].length;
        //alert(amount);

        for(var i in data["items"]){
            var img = data["items"][i].img;
            var alt = data["items"][i].alt;
            var href = data["items"][i].href;
            var back = data["items"][i].back;

            var spaceFloatNum = 'spaceFloatStop';
            var spaceFloatNumR = 'spaceFloat'+Math.floor(Math.random()*4);
        
        content += "<a href=\"" +href+ "\" target='_blank'><div class='col-md-3 col-sm-6 center'><div class='flip-container center'><div class='flipper'><div class='circle center'><div class='front center\ "+spaceFloatNum+"'><img src=\"" +img+ "\" alt=\"" +alt+ "\"></div><div class='back center'><p>\""+back+"\"</p></div></div></div></div></div></a>";
        $(".vidsContent").html(content);
        }
    }

});
