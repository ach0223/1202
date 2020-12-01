$(document).ready(function () {

	console.log($(".sttitle"))
	var pathArray = $(".sttitle")

	$.each(pathArray, function (i, d) {
		

		var pathLength = d.getTotalLength()
		console.log(pathLength)

		$(d).css("stroke-dasharray", pathLength + " " + pathLength)
		$(d).css("stroke-dashoffset", pathLength)
	})	
})	

$(document).ready(function () {

	console.log($(".line1-1"))
	var pathArray = $(".line1-1")

	$.each(pathArray, function (i, d) {
		

		var pathLength = d.getTotalLength()
		console.log(pathLength)

		$(d).css("stroke-dasharray", pathLength + " " + pathLength)
		$(d).css("stroke-dashoffset", pathLength)
	})	
})	

$(document).ready(function () {

	console.log($(".line5-1"))
	var pathArray = $(".line5-1")

	$.each(pathArray, function (i, d) {
		

		var pathLength = d.getTotalLength()
		console.log(pathLength)

		$(d).css("stroke-dasharray", pathLength + " " + pathLength)
		$(d).css("stroke-dashoffset", pathLength)
	})	
})	


$(document).ready(function () {

	console.log($(".st1"))
	var pathArray = $(".st1")

	$.each(pathArray, function (i, d) {
		

		var pathLength = d.getTotalLength()
		console.log(pathLength)

		$(d).css("stroke-dasharray", pathLength + " " + pathLength)
		$(d).css("stroke-dashoffset", pathLength)
	})	
})	


$(document).ready(function () {

	console.log($(".stline2"))
	var pathArray = $(".stline2")

	$.each(pathArray, function (i, d) {
		

		var pathLength = d.getTotalLength()
		console.log(pathLength)

		$(d).css("stroke-dasharray", pathLength + " " + pathLength)
		$(d).css("stroke-dashoffset", pathLength)
	})	
})	

