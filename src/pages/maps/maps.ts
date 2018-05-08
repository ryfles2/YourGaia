import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var lengthRouteLabel:any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    lengthRoute = 1;
    lengthRouteLabel = "Short";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
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
}
var lengthRoute;


