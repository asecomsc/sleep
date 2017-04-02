$(document).ready(function() {
	e = new Date();
	a = 0;
    $("button").click(function(){
		a++;
		d = new Date();		
		if (a==1) { 
			$('#uno').text(d.format("HH:MM:ss"));	
			$('#dos').text('');
			$('#tres').text('');
			ant = d;
		}
		if (a==2) { 
			miDif = d.getTime() - ant.getTime();
			e.setTime(miDif);
			$('#dos').text(e.format("UTC:HH:MM:ss")); 
			$('#tres').text(d.format("HH:MM:ss")); 
			ant = d;
		}
		if (a==3) { 
			miDif = d.getTime() - ant.getTime();
			e.setTime(miDif);
			$('#dos').text(e.format("UTC:HH:MM:ss") ); 
			$('#tres').text(d.format("HH:MM:ss") ); 			
			$('#uno').text('');
		}
		if (a==3) { 
			a = 0;
		}
    });
});