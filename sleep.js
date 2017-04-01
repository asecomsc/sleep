$(document).ready(function() {
	a = 0;
    $("button").click(function(){
		a++;
		d = new Date();		
		if (a==1) { $('#room').text(d.format("HH:MM"));	}
		if (a==2) { $('#sleep').text(d.format("HH:MM")); }
		if (a==3) { $('#cama').text(d.format("HH:MM"));	}
		if (a==3) { a = 0}
    });
});