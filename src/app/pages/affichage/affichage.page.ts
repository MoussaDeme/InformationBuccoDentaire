import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import {PopoverController} from '@ionic/angular'; 

@Component({
  selector: 'app-affichage',
  templateUrl: '/affichage.page.html',
  styleUrls: ['./affichage.page.scss'],
})
export class AffichagePage implements OnInit {
   nom = null;
  constructor(public navParams: NavParams, public popOverController: PopoverController) { }

  ngOnInit() {
     this.nom = this.navParams.get('nom');
  }
  FermerPopup()
  {
    this.popOverController.dismiss();
  }

}
