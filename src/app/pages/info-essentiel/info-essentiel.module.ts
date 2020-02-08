import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoEssentielPage } from './info-essentiel.page';

const routes: Routes = [
  {
    path: '',
    component: InfoEssentielPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoEssentielPage]
})
export class InfoEssentielPageModule {}
