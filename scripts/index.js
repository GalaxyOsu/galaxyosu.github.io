function currentDay() {
  var today = new Date();
  var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
  var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var dia = diasSemana[today.getDay()];
    var diaNum = today.getDate();
    var mes = meses[today.getMonth()];
    var anio = today.getFullYear();
    var hora = today.getHours();
    var minutos = today.getMinutes();
    var segundos = today.getSeconds();
    var fecha = "El dia de hoy es:<br>"+ dia + ", " + diaNum + " de " + mes + " de " + anio;
    var fechaCompleta = fecha;
    document.getElementById("dia").innerHTML = fechaCompleta;
}

setTimeout("currentDay()", 1);