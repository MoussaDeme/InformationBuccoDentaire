import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.page.html',
  styleUrls: ['./cancer.page.scss'],
})
export class CancerPage implements OnInit {

  constructor() { }
  public listElem =
  [
      {nom: 'Bien se brosser les dents'},
      {nom: 'choisir sa brosse a dents'}
    ];
  ngOnInit() {
  }

}
