$(document).ready(function() {
	e = new Date();
	a = 0;
    $("button").click(function(){
		a++;
		d = new Date();		
		if (a==1) { 
			$('#room').text(d.format("HH:MM:ss"));	
			ant = d;
		}
		if (a==2) { 
			miDif = d.getTime() - ant.getTime();
			e.setTime(miDif);
			$('#sleep').text(d.format("HH:MM:ss")+ '   ' + e.format("MM:ss") ); 
			ant = d;
		}
		if (a==3) { 
			miDif = d.getTime() - ant.getTime();
			e.setTime(miDif);
			$('#cama').text(d.format("HH:MM:ss")+ '   ' + e.format("MM:ss") ); 		
		}
		if (a==3) { a = 0}
    });
});