$(document).ready(function() {
    // Hides the text as the page loads
    $('#column1').hide();
    $('#column2').hide();
    $('#column3').hide();
    $('#motto').hide();
    //Stagger out the animation of the fading in from top to bottom.
    $('#column1').delay(800).fadeIn();
    $('#column2').delay(1200).fadeIn();
    $('#column3').delay(1600).fadeIn();

    //Changes the company name slightly and slide down the motto when hover
    $("#companyName").hover(function(){
        $("#companyTwo").css({'color':'#ffa400'});
        $('#motto').slideDown(300);
    });

    // Cues up the animation and set intervals after user hovers over
        $("#gamer").mouseover(function(){
            setInterval(function(){
                $("#gamer").css({'color':'red'});
                $("#gamer").animate({'margin-left':'50px'},1000);
                $("#gamer").animate({'margin-left':'-50px'},1000);
                },5000); 
                }); 
    // User hovers cursor off of the tile and causes the animation to reverse and queue up a different color. Not full RGB but changes Blue and Red. 
        $("#gamer").mouseout(function(){   
            setInterval(function(){
                $("#gamer").css({'color':'blue'});
                $("#gamer").animate({'margin-right':'50px'},1000);
                $("#gamer").animate({'margin-right':'-50px'},1000);
                },5000); 
                }); 

    // Creates the assets to run the images in the ads
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
		
	// start slide show
    setInterval( function () {   
	//Sets the intervals as each image and caption will fade in and out and call the next one in the gallery.
       	$("#caption").fadeOut(1000);
       	$("#slide").fadeOut(1000,
       		function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
				$("#caption").text(nextCaption).fadeIn(1000);
			}
		);    // end callback
	},
	3000);

    // Simple animation which slides up and down text when clicked
    $("#list").hide();
    $("#flipDown").click(function(){
        $("#list").slideDown(300);
      });
      
    $("#flipUp").click(function(){
        $("#list").slideUp(300);
      });           

    // When the user mouses over the testimontal pictures it expands and then goes back to original size after user moves mouse out. 
    $('.testPic').mouseover(function() 
	{
	$(this).css("cursor","pointer");
	$(this).animate({width: "100%", height: "100%"}, 'slow');
	});
 
 	$('.testPic').mouseout(function()
   	{   
	   $(this).animate({width: "50%"}, 'slow');
	});

});
