import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LibraryPage} from "../pages/library/library";
import {LibraryItemPage} from "../pages/library/library-item/library-item";
import {SettingsPage} from "../pages/settings/settings";
import {MenuPage} from "../pages/menu/menu";
import {QuoteEditPage} from "../pages/home/quote-edit/quote-edit";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../services/quotes.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibraryPage,
    LibraryItemPage,
    SettingsPage,
    MenuPage,
    QuoteEditPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibraryPage,
    LibraryItemPage,
    SettingsPage,
    MenuPage,
    QuoteEditPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
