import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CollectHeadPage } from '../collecthead/collecthead'
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-collecthead',
  templateUrl: 'add-collecthead.html',
})
export class AddCollectHeadPage {
  collectHead: Array<{region: string, locale: string}>;
  // collHead: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.collectHead=[];

  }

  addCollectHead(collectHead) {
    var AV = require('leancloud-storage');
    var CollectHead = AV.Object.extend('CollectHead');
    var collHead = new CollectHead();
    collHead.set('region', collectHead.region);
    collHead.set('locale', collectHead.locale);
    collHead.save().then(item => {
      let alert = this.alertCtrl.create({
        title: 'added!',
        subTitle: 'add success!',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(CollectHeadPage);
    }).catch(error => {
      console.err(error);
    });
  }

}
