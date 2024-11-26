import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { register } from 'swiper/element/bundle';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
// register Swiper custom elements
register();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
  providers:[
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({innerHTMLTemplatesEnabled:true}))
  ]
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

