import { CancerPage } from './../cancer/cancer.page';
import { HygienePage } from './../pages/hygiene/hygiene.page';

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListPage } from '../list/list.page';
import { TabsPage } from '../tabs/tabs.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  
  
  type = '';
     constructor(public navCtrl: NavController, public nav: NavController, public router: Router) {
     }
     onGoToAppareils() {
       this.navCtrl.navigateForward('/list');
      }
      onGoToMaladie() {
        this.nav.navigateBack('/cancer');
      }
      onGoToHygiene() {
        this.nav.navigateBack('hygiene');
      }
      pushPage(type: string)
      {
        this.type = type;
        console.log('type',type);
        this.nav.navigateBack('info-essentiel/'+this.type);
      }
}
