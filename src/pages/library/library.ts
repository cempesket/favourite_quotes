import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {QuoteCategory} from "../../data/quote-category.interface";
import quote from '../../data/quotes'
import {LibraryItemPage} from "./library-item/library-item";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: QuoteCategory[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteCollection = quote;
  }

  categorySelected(index) {
    const category = this.quoteCollection[index];
    this.navCtrl.push(LibraryItemPage, category).catch()
  }

}
