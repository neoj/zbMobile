import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { CollectHeadPage } from '../pages/collecthead/collecthead';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(private translate: TranslateService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.initTranslate();
    var APP_ID = 'JwU1yPVdDMAOgvLwtbRjs2K1-gzGzoHsz';
    var APP_KEY = 'EToBzGUWPyF2hWi1NfRO8elt';
    var AV = require('leancloud-storage');

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'nav.home', component: HomePage },
      { title: 'nav.list', component: ListPage },
      { title: 'nav.collecthead', component: CollectHeadPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
      // Set the default language for translation strings, and the current language.
      this.translate.setDefaultLang('zh');

      // if (this.translate.getBrowserLang() !== undefined) {
      //     this.translate.use(this.translate.getBrowserLang());
      // } else {
      //     this.translate.use('zh'); // Set your language here
      // }

      // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      //     this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
      // });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
