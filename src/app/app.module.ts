import { AffichagePageModule } from './pages/affichage/affichage.module';
import { CancerPage } from './cancer/cancer.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


let firebaseConfig = {
  apiKey: 'AIzaSyBTZ4O136haZjFuxiX8jZoKAS96i9bdvPM',
  authDomain: 'bucco-dentaire.firebaseapp.com',
  databaseURL: 'https://bucco-dentaire.firebaseio.com',
  projectId: 'bucco-dentaire',
  storageBucket: 'bucco-dentaire.appspot.com',
  messagingSenderId: '661675065969',
  appId: '1:661675065969:web:54ea8df219c7ec61'
};
@NgModule({
  declarations: [AppComponent
  ],
  entryComponents: [
    //CancerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AffichagePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
