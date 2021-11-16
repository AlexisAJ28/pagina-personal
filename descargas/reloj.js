funtion(){

 var  actualizarHora = funtion(){
 	var  fecha = new Date(),
 		horas = fecha.getHours(),
 		ampm,
 		minutos = fecha.getMinutes(),
 		segundos = fecha.getSeconds(),
 		diaSemana = fecha.getDay(),
 		dia = fecha.getDate(),
 		mes = fecha.getMonth(),
 		year = fecha.getFullYear();


 	var pHoras = document.getElementByID('horas')
 		pAMPM = document.getElementByID('ampm')
 		pMinutos = document.getElementByID('minutos')
 		pSegundos = document.getElementByID('segundos')
 		pDiaSemana = document.getElementByID('diaSemana')
 		pDia = document.getElementByID('dia')
 		pMes = document.getElementByID('mes')
 		pYear = document.getElementByID('year')

 	 var  semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
 	 pDiaSemana.textContent = semana[diaSemana];

 	 pDia.textContent = dia;

 	 var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
 		 pMes.textContent = meses[mes];

 		 pYear.textContent = year;

 			if (horas >= 12) {
 				horas = horas - 12
 				ampm = 'PM';
 			} 
            else {
 				ampm = 'AM';
 			}
 			
 			if (horas == 0) {
 				horas = 12;
 			};

 			pHoras.textContent = horas;
 			pAMPM.textContent = ampm;

 			if (minutos < 10 ) {
 				minutos = "0" +minutos};

 			if (segundos < 10 ) {segundos = "0" + segundos}


 			pMinutos.textContent = minutos;
 			pSegundos.textContent = segundos;


 };

 		actualizarHora();
 		var  intervalor = setInterval(actualizarHora, 1000)
}()





