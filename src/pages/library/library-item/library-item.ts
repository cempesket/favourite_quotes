import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../../data/quotes.interface";
import {QuoteCategory} from "../../../data/quote-category.interface";
import {QuotesService} from "../../../services/quotes.service";


@IonicPage()
@Component({
  selector: 'page-library-item',
  templateUrl: 'library-item.html',
})
export class LibraryItemPage implements OnInit {
  quotes: Quote[];
  categoryName: string;
  categoryIcon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtr: AlertController, private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.categoryName = this.navParams.get('category');
    this.quotes = this.navParams.get('quotes');
    this.categoryIcon = this.navParams.get('icon');
  }

  onSelectQuote(quote: Quote) {
    const alert = this.alertCtr.create({
      title: 'Add favourite',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add quote?',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.quotesService.addToFavourite(quote)
        }
      },
        {
          text: 'Cancel',
          handler: () => {
          }
        }],
      enableBackdropDismiss: false

    });
    alert.present().catch();
  }

}
