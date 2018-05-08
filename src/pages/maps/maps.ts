import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
var lengthRouteLabel:any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  map:any;
  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    lengthRoute = 1;
    lengthRouteLabel = "Short";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    this.showMap();
  }

  changeLengthRoute(){
    switch (lengthRoute)
    {
      case 1:
      lengthRoute=2;
      lengthRouteLabel = "Medium";
      console.log(lengthRouteLabel);
      break;
      case 2:
      lengthRoute=3;
      lengthRouteLabel = "Long";
      break;
      case 3:
      lengthRoute=1;
      lengthRouteLabel = "Short";
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


