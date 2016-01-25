var cageMurray = ["http://www.fillmurray.com/g/155/300", 
"http://www.placecage.com/c/200/300", 
"http://www.fillmurray.com/140/100", 
"http://dailynewsdig.com/wp-content/uploads/2013/05/cutest-kittens-in-the-world-2.jpg"]

$('img').attr('src', cageMurray[0])

var clickCount = 0

$('.onward').click(function(){
	clickCount++;
	$('img').attr('src', cageMurray[clickCount])
})

$('.rearward').click(function(){
	clickCount--;
	$('img').attr('src', cageMurray[clickCount])
})
