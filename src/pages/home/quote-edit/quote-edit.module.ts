import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuoteEditPage } from './quote-edit';

@NgModule({
  declarations: [
    QuoteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(QuoteEditPage),
  ],
})
export class QuoteEditPageModule {}
