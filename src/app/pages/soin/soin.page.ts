import { AffichagePage } from './../affichage/affichage.page';
import { Component, OnInit } from '@angular/core';
import { Soin, Information } from './../../model/hygiene.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {PopoverController} from '@ionic/angular'; 

@Component({
  selector: 'app-soin',
  templateUrl: './soin.page.html',
  styleUrls: ['./soin.page.scss'],
})
export class SoinPage implements OnInit {
    monNom = '';
  article: Information = {
    id: 0,
    titre: '',
    contenu: '',
    cause: '',
    manifestation: '',
    type: '',
    vue: true
  };
  titre1 = 'cancer';
  contenu = '';
  liste_ref: AngularFireList<any>;
  liste_article: Observable<any []>;
  constructor(public db: AngularFireDatabase, public popOverController: PopoverController) {
        this.liste_ref = db.list('/Information');
        this.liste_article = this.liste_ref.valueChanges();
        console.log(this.liste_ref);
    }
    ngOnInit() {
      
   }
   onClick()
   {
     
       //enregistrement dans la base de donne
       try {
         this.db.list('Information' ).push(this.article);
         alert('enregistrement reussi');
       } catch (error) {
         alert(error);
       }
     
 
   }
   //popover
   async presenterUnPopover(ev: Event)
   {
     const popover = await this.popOverController.create({
           component: AffichagePage,
           event: ev,
           componentProps: {
             nom: this.monNom
           },
           translucent: true,
     });
     return await popover.present();
   } 
}
