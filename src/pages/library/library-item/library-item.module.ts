import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryItemPage } from './library-item';

@NgModule({
  declarations: [
    LibraryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryItemPage),
  ],
})
export class LibraryItemPageModule {}
