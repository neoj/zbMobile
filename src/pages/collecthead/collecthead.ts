import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddCollectHeadPage } from '../add-collecthead/add-collecthead';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-collecthead',
  templateUrl: 'collecthead.html',
})
export class CollectHeadPage {
  items: Array<{region: string, locale: string, objectId: string, createdAt: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var AV = require('leancloud-storage');

    this.items = [];

    var query = new AV.Query('CollectHead');
    query.find().then(collectHead => {
      collectHead.forEach(item => {
        this.items.push({
          region: item.attributes.region,
          locale: item.attributes.locale,
          objectId: item.id,
          createdAt: item.createdAt
        });
      });
    }).catch(error => {
      console.error(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  navigatedToAddCollectHead() {
    this.navCtrl.push(AddCollectHeadPage);
  }

}
