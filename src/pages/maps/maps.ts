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
    console.log('ionViewDidLoad MapsPage');
    this.showMap();

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

    const options ={ 
       center: location,
       zoom: 10}
   this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  } 
}
var lengthRoute;


