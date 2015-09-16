//
// paste this to dev console on gogolfest

var a = [];

function handleEvent(index) {
	var el = $( this );

	var title = el.find(".title").text();
	if (title == "") { return; }


	var date = el.find(".time:first").text();
	var time = el.find(".time2").text();
	var place = el.find(".place").html();


	var z = place.split("<br>");
	var tag = z[0];
	var place = z[1];

	var url = el.find("a").attr("href");


	a.push({
			title: title,
			date: date,
			time: time,
			place: place,
			tag: tag,
			url: url
		});

}


$(".event").each(handleEvent);

var current = $(".filter-day .btn-danger").text();
var exp = {};
exp[current] = a;

console.warn(JSON.stringify(exp));