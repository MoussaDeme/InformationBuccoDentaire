import { Hygiene } from './../../model/hygiene.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-hygiene',
  templateUrl: './hygiene.page.html',
  styleUrls: ['./hygiene.page.scss'],
})

export class HygienePage implements OnInit {
 article: Hygiene = {
   id: 0,
   titre: '',
   contenu: '',
   vue: true
 };
 titre1 = 'cancer';
 contenu = '';
 
 show: boolean = true;
 liste_ref: AngularFireList<any>; 
 liste_article: Observable<any []>;
 constructor(public db: AngularFireDatabase   ) {
       this.liste_ref = db.list('/Information');
       this.liste_article = this.liste_ref.valueChanges();
       console.log(this.liste_ref);
   }

  ngOnInit() {
  }
  onClick()
  {
    if (this.article.titre == '' && this.article.contenu == '') {
          alert('vide');
    } else {
      //enregistrement dans la base de donne
      try {
        this.db.list('Hygiene' ).push(this.article);
        alert('enregistrement reussi');
      } catch (error) {
        alert(error);
      }
    }
  }

}
