import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Information } from 'src/app/model/hygiene.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-essentiel',
  templateUrl: './info-essentiel.page.html',
  styleUrls: ['./info-essentiel.page.scss'],
})
export class InfoEssentielPage implements OnInit {
type = null;
  article: Information = {
    id: 0,
    titre: '',
    contenu: '',
    cause: '',
    manifestation: '',
    type: '',
    vue: true
  };
  liste_ref: AngularFireList<any>; 
 liste_article: Observable<any []>;
 constructor(public db: AngularFireDatabase, public activeroute: ActivatedRoute ) {
       this.liste_ref = db.list('/Information');
       this.liste_article = this.liste_ref.valueChanges();
       console.log(this.liste_ref);
   }

  ngOnInit() {
     this.type= this.activeroute.snapshot.paramMap.get('type');
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
