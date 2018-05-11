import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google:any;


@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  lat:any;
  lng:any;
  map:any;
  @ViewChild('map') mapRef: ElementRef;

  lengthRouteLabel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    lengthRoute = 1;
    this.lengthRouteLabel = "Short";
  }

  ionViewDidLoad() {
   

    this.geolocation.getCurrentPosition().then((pos)=>{
      this.lat=pos.coords.latitude;
      this.lng=pos.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
    });

    console.log('ionViewDidLoad MapsPage');
    this.showMap();
    this.showShortTraces();
  }

  changeLengthRoute(){
    switch (lengthRoute)
    {
      case 1:
      lengthRoute=2;
      this.lengthRouteLabel = "Medium";
      break;
      case 2:
      lengthRoute=3;
      this.lengthRouteLabel = "Long";
      break;
      case 3:
      lengthRoute=1;
      this.lengthRouteLabel = "Short";
      break;
    }
  }
  showMap(){
    const location = new google.maps.LatLng(41.1250499, -8.6470055);

    const options ={ 
       center: location,
       zoom: 10}
   this.map = new google.maps.Map(this.mapRef.nativeElement, options);
   var dogwalker  = new google.maps.Marker({position:location,title:"felek"});
   dogwalker.setMap(this.map);
  }
  
  initTraces(){
    const Cantinho = new MyMarker(41.1250499,-8.6470055,"Cantinho das Aromáticas");
    const Zoo = new MyMarker(41.0927201,-8.5394872, "Zoo Santo Inácio");
    const Biological = new MyMarker(41.0978171,-8.5558548,"Biological Park");
    const Quintinha = new MyMarker(41.0702118,-8.6032337,"Quintinha Pedagógica Andreia Moreira");
    const Municipal = new MyMarker(41.0411643,-8.652459,"Municipal swimming pool of Granja");
  
    shortTrace.push(Cantinho);
    shortTrace.push(Zoo);
    shortTrace.push(Biological);
    
    mediumTrace.push(Cantinho);
    mediumTrace.push(Zoo);
    mediumTrace.push(Biological);
    mediumTrace.push(Quintinha);
    
    longTrace.push(Cantinho);
    longTrace.push(Zoo);
    longTrace.push(Biological);
    longTrace.push(Quintinha);
  
  }

  showShortTraces(){
    var firstLoc = new google.maps.LatLng(41.1250499, -8.6470055);
    var first = new google.maps.Marker({position:firstLoc,title:"Cantinho das Aromáticas"});
    var secondLoc = new google.maps.LatLng(41.0978171,-8.5558548);
    var second = new google.maps.Marker({position:secondLoc,title:"Biological Park"});
    var thirdLoc = new google.maps.LatLng(41.0927201,-8.5394872);
    var third = new google.maps.Marker({position:thirdLoc,title:"Zoo Santo Inácio"});
    first.setMap(this.map);
    second.setMap(this.map);
    third.setMap(this.map);
  }

  showMediumTraces(){
    
  }
}




var lengthRoute;
var shortTrace = [];
var mediumTrace =[];
var longTrace = [];

class MyMarker {
  lat;
  lng;
  name;
  constructor(public l:any,public lg: any, public nam:string) {
    this.lat = l;
    this.lng = lg;
    this.name = nam;
  }

  getName(){
    return this.name;
  }

  getLat(){
    return this.lat;
  } 

  getLng(){
    return this.lng;
  }

}


