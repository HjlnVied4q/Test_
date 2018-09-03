function getObject(){
	
	// get tag element
	var counter =  document.getElementById("countdown");
	var dias = document.createElement("SPAN");
	dias.className = 'days';
	counter.appendChild(dias);
	var horas = document.createElement("SPAN");
	horas.className = 'horas';
	counter.appendChild(horas);
	var minutos = document.createElement("SPAN");
	minutos.className = 'minutos';
	counter.appendChild(minutos);
	var segundos = document.createElement("SPAN");
	segundos.className = 'secs';
	counter.appendChild(segundos);
	 
	return counter;
}