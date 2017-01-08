//$(panda).ready(function() {

	$(".panda").click(function() {
     
        var type = $(this).attr('data-type'); 

        var tendance = $(this).attr('data-tendance')

        console.log(type + " " + tendance) 
        

        if (type != undefined) {
        	$('div').html(type + " " + tendance);
        }
        else {
        	$('div').html("what?");
        }
    });




    