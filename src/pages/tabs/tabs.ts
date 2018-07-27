import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;

  constructor(public translate: TranslateService) {
    // translateService.get(['TABS.HOME', 'TABS.ABOUT']).subscribe(values => {
    //   this.tab1Title = values['TABS.HOME'];
    //   this.tab2Title = values['TABS.ABOUT'];
    // });
  }
}
