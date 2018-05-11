import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;


@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {


  map:GoogleMap;
  

  lengthRouteLabel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private geolocation: Geolocation,
     private alerrtCtrl: AlertController)  {
    lengthRoute = 1;
    this.lengthRouteLabel = "Short";
  }

  ionViewDidLoad() {
    this.initTraces();
    this.showMap();
   // this.showShortTrace();
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
    this.map = GoogleMaps.create('map_canvas',{
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

   
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

  showShortTrace(){
    for(let marker of shortTrace){
      var location = new google.maps.LatLng(marker.latitude, marker.longitude);
      var myMarker = new google.maps.Marker({position: location, title: marker.title});
      myMarker.setMap(this.map);
    }
  }

}
var lengthRoute;
var mapReady = false;
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

