import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cancer', loadChildren: './cancer/cancer.module#CancerPageModule' },
  { path: 'hygiene', loadChildren: './pages/hygiene/hygiene.module#HygienePageModule' },
  { path: 'affichage', loadChildren: './pages/affichage/affichage.module#AffichagePageModule' },
  { path: 'maladie', loadChildren: './pages/maladie/maladie.module#MaladiePageModule' },
  { path: 'soin', loadChildren: './pages/soin/soin.module#SoinPageModule' },
  { path: 'info-essentiel/:type', loadChildren: './pages/info-essentiel/info-essentiel.module#InfoEssentielPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
