class Localizacion{

      constructor(callback){
      if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition((posicion)=>{
		this.latitude = posicion.coords.latitude;
		this.longitude = posicion.coords.longitude;
		callback();

		} );
      }else{
       alert("tu navegador no soporta geolocalizacion");
   		}
	}
}

