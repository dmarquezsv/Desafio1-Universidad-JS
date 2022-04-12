
//funcion utilizada para copiar al portapapeles el texto seleccionado
function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  //alert(id_elemento);
  document.execCommand("copy");
  document.body.removeChild(aux);
}




function initMap(){
	var puntoB = document.getElementById('puntoB').value;
	
	const ubicacion = new Localizacion(()=>{
	const milugar = {lat : ubicacion.latitude, lng : ubicacion.longitude}
	const centro = {lat : 13.717838, lng : -89.152504}	
	var texto = "<h3>Tu ubicacion actual</h3>"

	const opciones= {
			center: milugar,
			zoom : 18,
			mapTypeId: 'satellite',

	}
	var map = document.getElementById('map');
	var mapa = new google.maps.Map(map,opciones);//ubica el mapa en el div map con la configuracion de opciones
		

	//creando los marcadores para cada edificio
	//MARCADOR DE TU UBICACION ACTUAL
	const marcador = new google.maps.Marker({ position: milugar, map: mapa,
		title: "Tu ubicacion actual",
		animation: google.maps.Animation.DROP
	});

	marcador.setIcon('iconos/male-2.png');//agregando icono a tu posicion

	var informacion = new google.maps.InfoWindow({
		content: texto
	});
	
	marcador.addListener('click', function(){
	informacion.open(mapa, marcador);
	});

	//MARCADOR DE LA PINACOTECA
var pinacoteca = new google.maps.Marker({
position: new google.maps.LatLng(13.716675, -89.153255),
map: mapa,
icon: 'iconos/p.png'
});
 
// InfoWindow para el marcador 1
var infowindowP = new google.maps.InfoWindow({
content: '<h5>Pinacoteca y Centro de computo</h5><p>Coordenadas: '+pinacoteca.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(pinacoteca, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowP.open(mapa, pinacoteca);
});
// final del pinacoteca

//MARCADOR DE LA BIBLIOTECA
var biblioteca = new google.maps.Marker({
position: new google.maps.LatLng(13.716711, -89.153507),
map: mapa,
icon: 'iconos/library.png'
});
 
// InfoWindow para el marcador biblioteca
var infowindowB = new google.maps.InfoWindow({
content: '<h1>Biblioteca</h1><p>Coordenadas: '+biblioteca.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(biblioteca, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowB.open(mapa, biblioteca);
});
// final del biblioteca


//MARCADOR DE LA PLAZA CENTRAL
var plaza = new google.maps.Marker({
position: new google.maps.LatLng(13.715892, -89.153209),
map: mapa,
icon: 'iconos/c.png'
});
 
// InfoWindow para el marcador plaza
var infowindowPLAZA = new google.maps.InfoWindow({
content: '<h5>Plaza central<h55><p>Coordenadas: '+plaza.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(plaza, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowPLAZA.open(mapa, plaza);
});
// final del marcador plaza

//MARCADOR DE LA EDIFICIO R
var ediR = new google.maps.Marker({
position: new google.maps.LatLng(13.716322, -89.153670),
map: mapa,
icon: 'iconos/edifc.png'
});
 
// InfoWindow para el marcador EDIFICIO R
var infowindowR = new google.maps.InfoWindow({
content: '<h5>Edificio R</h5><p>Coordenadas: '+ediR.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediR, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowR.open(mapa, ediR);
});
// final del marcador EDIFICIO R

//MARCADOR DE LA EDIFICIO A
var ediA = new google.maps.Marker({
position: new google.maps.LatLng(13.716006, -89.153413),
map: mapa,
icon: 'iconos/edi.png'
});
 
// InfoWindow para el marcador EDIFICIO A
var infowindowA = new google.maps.InfoWindow({
content: '<h5>Edificio A</h5><p>Coordenadas: '+ediA.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediA, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowA.open(mapa, ediA);
});

// final del marcador EDIFICIO A

//MARCADOR DE LA EDIFICIO B
var ediB = new google.maps.Marker({
position: new google.maps.LatLng(13.715755, -89.153378),
map: mapa,
icon: 'iconos/edi.png'
});
 
// InfoWindow para el marcador EDIFICIO B
var infowindowB = new google.maps.InfoWindow({
content: '<h5>Edificio B</h5><p>Coordenadas: '+ediB.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediB, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowB.open(mapa, ediB);
});

// final del marcador EDIFICIO B

//MARCADOR DE LA EDIFICIO C
var ediC = new google.maps.Marker({
position: new google.maps.LatLng(13.715274, -89.153301),
map: mapa,
icon: 'iconos/edi.png'
});
 
// InfoWindow para el marcador EDIFICIO C
var infowindowC = new google.maps.InfoWindow({
content: '<h5>Edificio C</h5><p>Coordenadas: '+ediC.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediC, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowC.open(mapa, ediC);
});

// final del marcador EDIFICIO C

//MARCADOR DE LA Aula Magna A
var magA = new google.maps.Marker({
position: new google.maps.LatLng(13.715959, -89.153719),
map: mapa,
icon: 'iconos/gro.png'
});
 
// InfoWindow para el marcador
var infowindowMA = new google.maps.InfoWindow({
content: '<h5>Aula Magna A</h5><p>Coordenadas: '+magA.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(magA, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowMA.open(mapa, magA);
});

// final del marcador Aula Magna A

//MARCADOR DE LA Aula Magna B
var magB = new google.maps.Marker({
position: new google.maps.LatLng(13.715684, -89.153710),
map: mapa,
icon: 'iconos/gro.png'
});
 
// InfoWindow para el marcador
var infowindowMB = new google.maps.InfoWindow({
content: '<h5>Aula Magna B</h5><p>Coordenadas: '+magB.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(magB, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowMB.open(mapa, magB);
});

// final del marcador Aula Magna B

//MARCADOR DE LA Aula Magna C
var magC = new google.maps.Marker({
position: new google.maps.LatLng(13.714977, -89.154289),
map: mapa,
icon: 'iconos/gro.png'
});
 
// InfoWindow para el marcador
var infowindowMC = new google.maps.InfoWindow({
content: '<h5>Aula Magna C</h5><p>Coordenadas: '+magC.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(magC, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowMC.open(mapa, magC);
});
// final del marcador Aula Magna C


//MARCADOR DE Edificio CDIU
var ediCD = new google.maps.Marker({
position: new google.maps.LatLng(13.715025, -89.153416),
map: mapa,
icon: 'iconos/cd.png'
});
 
// InfoWindow para el marcador
var infowindowCD = new google.maps.InfoWindow({
content: '<h5>Edificio CDIU</h5><p>Coordenadas: '+ediCD.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediCD, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowCD.open(mapa, ediCD);
});

// final del marcador Edificio CDIU





//MARCADOR DE Edificio 8 escuela de ortesis y protesis
var edi8 = new google.maps.Marker({
position: new google.maps.LatLng(13.714724, -89.154113),
map: mapa,
icon: 'iconos/or.png'
});
 
// InfoWindow para el marcador
var infowindowE8 = new google.maps.InfoWindow({
content: '<h5>Edificio 8 escuela de ortesis y protesis</h5><p>Coordenadas: '+edi8.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(edi8, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowE8.open(mapa, edi8);
});

// final del marcador Edificio 8

//MARCADOR DE HANGAR AERONAUTICO
var hangar = new google.maps.Marker({
position: new google.maps.LatLng(13.714342, -89.154947),
map: mapa,
icon: 'iconos/hangar.png'
});
 
// InfoWindow para el marcador
var infowindowH = new google.maps.InfoWindow({
content: '<h5>Hangar Aeronautico UDB</h5><p>Coordenadas: '+hangar.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(hangar, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowH.open(mapa, hangar);
});

// final del marcador Hangar Aeronautico UDB



//MARCADOR DE Edificio 2
var edi2 = new google.maps.Marker({
position: new google.maps.LatLng(13.715918, -89.154907),
map: mapa,
icon: 'iconos/expert.png'
});
  
// InfoWindow para el marcador
var infowindowE2 = new google.maps.InfoWindow({
content: '<h5>Edificio 2 Virrectoria y Ciencias de la Tecnologia</h5><p>Coordenadas: '+edi2.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(edi2, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowE2.open(mapa, edi2);
});

// final del marcador Edificio 2




//MARCADOR DE Edificio 3
var edi3 = new google.maps.Marker({
position: new google.maps.LatLng(13.715785, -89.155155),
map: mapa,
icon: 'iconos/bio.png'

});
  
// InfoWindow para el marcador
var infowindowE3 = new google.maps.InfoWindow({
content: '<h5>Edificio 3 Biomedia y Mecatronica</h5><p>Coordenadas: '+edi3.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(edi3, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowE3.open(mapa, edi3);
});

// final del marcador Edificio 3



//MARCADOR DE Edificio 4
var edi4 = new google.maps.Marker({
position: new google.maps.LatLng(13.715439, -89.155351),
map: mapa,
icon: 'iconos/ener.png'
});
  
// InfoWindow para el marcador
var infowindowE4 = new google.maps.InfoWindow({
content: '<h5>Edificio 4 Inst. de investigacion de energia</h5><p>Coordenadas: '+edi4.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(edi4, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowE4.open(mapa, edi4);
});

// final del marcador Edificio 4



//MARCADOR DE Edificio 5
var edi5 = new google.maps.Marker({
position: new google.maps.LatLng(13.714994, -89.155195),
map: mapa,
icon: 'iconos/5.png'
});

// InfoWindow para el marcador
var infowindowE5 = new google.maps.InfoWindow({
content: '<h5>Edificio 5 Laboratorio de materiales</h5><p>Coordenadas: '+edi5.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(edi5, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowE5.open(mapa, edi5);
});

// final del marcador Edificio 5


//MARCADOR DE Edificio 6 
var edi6 = new google.maps.Marker({
position: new google.maps.LatLng(13.714806, -89.155233),
map: mapa,
icon: 'iconos/computers.png'
});
 
// InfoWindow para el marcador
var infowindowE6 = new google.maps.InfoWindow({
content: '<h5>Edificio 6 Centro de computo</h5><p>Coordenadas: '+edi6.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(edi6, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowE6.open(mapa, edi6);
});

// final del marcador Edificio 6

//MARCADOR DE Edificio 7 
var edi7 = new google.maps.Marker({
position: new google.maps.LatLng(13.714465, -89.155241),
map: mapa,
icon: 'iconos/airport_apron.png'
});
 
// InfoWindow para el marcador
var infowindowE7 = new google.maps.InfoWindow({
content: '<h5>Edificio 7 Taller Mecanico</h5><p>Coordenadas: '+edi7.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(edi7, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowE7.open(mapa, edi7);
});

// final del marcador Edificio 7

//MARCADOR DE Edificio OWCC
var ediW = new google.maps.Marker({
position: new google.maps.LatLng(13.715460, -89.155868),
map: mapa,
icon: 'iconos/ewcc.png'
});
 
// InfoWindow para el marcador
var infowindowEW = new google.maps.InfoWindow({
content: '<h5>Edificio OWCC</h5><p>Coordenadas: '+ediW.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediW, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowEW.open(mapa, ediW);
});

// final del marcador Edificio OWCC

//MARCADOR DE Edificio DE PROFESORES
var ediPR = new google.maps.Marker({
position: new google.maps.LatLng(13.715510, -89.152777),
map: mapa,
icon:'iconos/prof.png'
});
 
// InfoWindow para el marcador
var infowindowPR = new google.maps.InfoWindow({
content: '<h5>Edificio de profesores</h5><p>Coordenadas: '+ediPR.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediPR, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowPR.open(mapa, ediPR);
});


//MARCADOR DE PARQUEO
var ediPAR = new google.maps.Marker({
position: new google.maps.LatLng(13.716411, -89.154779),
map: mapa,
icon: 'iconos/car.png'
});
 
// InfoWindow para el marcador
var infowindowPAR = new google.maps.InfoWindow({
content: '<h5>Pista de parqueo</h5><p>Coordenadas: '+ediPAR.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediPAR, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowPAR.open(mapa, ediPAR);
});

// final del marcador PARQUEO

//MARCADOR DE PARQUEO SECUNDARIO EWCC
var ediPAR2 = new google.maps.Marker({
position: new google.maps.LatLng(13.715080, -89.155670),
map: mapa,
icon: 'iconos/car.png'
});
 
// InfoWindow para el marcador
var infowindowPAR2 = new google.maps.InfoWindow({
content: '<h5>Parqueo del edificio EWCC</h5><p>Coordenadas: '+ediPAR2.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediPAR2, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowPAR2.open(mapa, ediPAR2);
});

// final del marcador PARQUEO SECUNDARIO EWCC




//MARCADOR DE SANITARIOS
var ediS = new google.maps.Marker({
position: new google.maps.LatLng(13.715436, -89.153463),
map: mapa,
icon: 'iconos/iconos/toilets.png'
});
 
// InfoWindow para el marcador
var infowindowS = new google.maps.InfoWindow({
content: '<h5>Servicios sanitarios</h5><p>Coordenadas: '+ediS.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediS, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowS.open(mapa, ediS);
});

// final del marcador SANITARIOS 

//MARCADOR DE SANITARIOS 2
var ediS2 = new google.maps.Marker({
position: new google.maps.LatLng(13.714621, -89.155513),
map: mapa,
icon: 'iconos/toilets.png'
});
 
// InfoWindow para el marcador
var infowindowS2 = new google.maps.InfoWindow({
content: '<h5>Servicios sanitarios</h5><p>Coordenadas: '+ediS2.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(ediS2, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowS2.open(mapa, ediS2);
});

// final del marcador SANITARIOS 2


//MARCADOR DE CAFETERIA
var caf = new google.maps.Marker({
position: new google.maps.LatLng(13.715110, -89.152812),
map: mapa,
icon: 'iconos/caf.png'
});
 
// InfoWindow para el marcador
var infowindowCaf = new google.maps.InfoWindow({
content: '<h5>Cafeterias</h5><p>Coordenadas: '+caf.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(caf, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowCaf.open(mapa, caf);
});

// final del marcador CAFETERIA

//MARCADOR DE CAFETERIA
var caf2 = new google.maps.Marker({
position: new google.maps.LatLng(13.714564, -89.155674),
map: mapa,
icon: 'iconos/caf.png'
});
 
// InfoWindow para el marcador
var infowindowCaf2 = new google.maps.InfoWindow({
content: '<h5>Cafeterias</h5><p>Coordenadas: '+caf2.position+'</p>'
});
 
// Añadimos un evento de clic al marcador
google.maps.event.addListener(caf2, 'click', function() {
 
// Llamamos el método open del InfoWindow
infowindowCaf2.open(mapa, caf2);
});

// final del marcador CAFETERIA



//Definicion del punto de llegada

/*Verificamos la variable B, la cual
tiene el valor indicado por el input,
 luego evaluamos su valor y dependiendo de el lugar
 asi sera su valor en coordenadas para 
 determinar el lugar de llegada*/
		switch(puntoB){
			case 'Plaza Don Bosco':
				puntoB = plaza.position;
			break;

			case 'Pinacoteca y Centro de computo':
				puntoB= pinacoteca.position;
			break;

			case 'Biblioteca':
			puntoB = biblioteca.position;
			break;

			case 'Edificio A':
			puntoB = ediA.position;
			break;

			case 'Edificio B':
			puntoB = ediB.position;
			break;

			case 'Edificio C':
			puntoB = ediC.position;
			break;

			case 'Aula Magna A':
			puntoB = magA.position;
			break;

			case 'Aula Magna B':
			puntoB = magB.position;
			break;

			case 'Aula Magna C':
			puntoB = magC.position;
			break;

			case 'Edificio 2 Virrectoria y Ciencias de la Tecnologia':
			puntoB = edi2.position;
			break;

			case 'Edificio 3 Biomedia y Mecatronica':
			puntoB = edi3.position;
			break;

			case 'Edificio 4 Inst. de investigacion de energia':
			puntoB = edi4.position;
			break;
			
			case 'Edificio 5 Laboratorio de materiales':
			puntoB = edi5.position;
			break;

			case 'Edificio 6 Centro de computo':
			puntoB = edi6.position;
			break;

			case 'Edificio 7 Taller Mecanico':
			puntoB = edi7.position;
			break;

			case 'Edificio 8 Escuela de ortesis y protesis':
			puntoB = edi8.position;
			break;

			case 'Edificio CDIU':
			puntoB = ediCD.position;
			break;

			case 'Edificio EWCC':
			puntoB = ediW.position;
			break;

			case 'Edificio de Profesores':
			puntoB = ediPR.position;
			break;

			case 'Cafeteria Principal':
			puntoB = caf.position;
			break;

			case 'Cafeteria Secundaria':
			puntoB = caf2.position;
			break;

			case 'Pista de Parqueos':
			puntoB = ediPAR.position;
			break;

			case 'Parqueos de Edificio EWCC':
			puntoB = ediPAR2.position;
			break;

			case 'Parqueos de Edificio EWCC':
			puntoB = ediPAR2.position;
			break;
			
			case 'Sanitarios Principales':
			puntoB = ediS.position;
			break;
			
			case 'Sanitarios Secundarios':
			puntoB = ediS2.position;
			break;

			case '':
			alert('Por favor seleccione y pegue una direccion');
			break;

			default:
			alert('Lugar no habil, por favor seleccione uno de los lugares indicados en el menú');
			break;

		};//FIN DEL SWITCH



		var objConfigDR = {
		map: mapa,
		}
	
	var objConfigDS = {
		origin: milugar,
		destination: puntoB,
		travelMode: google.maps.TravelMode.WALKING
	}

    var ds = new google.maps.DirectionsService();
    var dr = new google.maps.DirectionsRenderer(objConfigDR);

    ds.route(objConfigDS, trazarRuta);

    function trazarRuta(resultados, status){
		if(status == 'OK'){
			dr.setDirections(resultados);
		}
    }

});

	
}//fin de el INITMAP

window.onload();