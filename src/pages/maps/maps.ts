import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  map:any;
  @ViewChild('map') mapRef: ElementRef;

  lengthRouteLabel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    lengthRoute = 1;
    this.lengthRouteLabel = "Short";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    this.initTraces();
    this.showMap();
    this.showShortTrace();
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
    const location = new google.maps.LatLng(51.507351, -0.127758);
    const marker = new Marker(41.1250499,-8.6470055,"felek");
    const location1 = new  google.maps.LatLng(marker.getLat(),marker.getLng());
    const options ={ 
       center: location1,
       zoom: 10}
   this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  } 

  initTraces(){
    const Cantinho = new Marker(41.1250499,-8.6470055,"Cantinho das Aromáticas");
    const Zoo = new Marker(41.0927201,-8.5394872, "Zoo Santo Inácio");
    const Biological = new Marker(41.0978171,-8.5558548,"Biological Park");
    const Quintinha = new Marker(41.0702118,-8.6032337,"Quintinha Pedagógica Andreia Moreira");
    const Municipal = new Marker(41.0411643,-8.652459,"Municipal swimming pool of Granja");

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

  showShortTrace(){
    console.log("start");
    
    
    for(let marker of shortTrace){
      var location = new google.maps.LatLng(marker.latitude, marker.longitude);
      var myMarker = new google.maps.Marker({position: location, title: marker.title});
      myMarker.setMap(this.map);
    }
  }

}
var lengthRoute;
var shortTrace = [];
var mediumTrace =[];
var longTrace = [];


class Marker {
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

