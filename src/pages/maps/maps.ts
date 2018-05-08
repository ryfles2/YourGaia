import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//var lengthRouteLabel:any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  lengthRouteLabel: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    lengthRoute = 1;
    this.lengthRouteLabel = "Short";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
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
}
var lengthRoute;


