import {Component, OnInit} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quotes.interface";
import {QuoteEditPage} from "./quote-edit/quote-edit";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  favouriteQuotes: Quote[];
  isAlternativeBackground = false;

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController, private settingsService: SettingsService) {

  }

  ionViewWillEnter() {
    this.favouriteQuotes = this.quotesService.getFavouritedQuotes();
    this.isAlternativeBackground = this.settingsService.isAlternativeBackground
  }

  ngOnInit() {


  }

  onSelectQuote(quote: Quote) {

    const modal = this.modalCtrl.create(QuoteEditPage, quote);
    modal.present().catch();
    modal.onDidDismiss(() => {
      this.favouriteQuotes = this.quotesService.getFavouritedQuotes();
    })
  }

  deleteQuote(quote: Quote) {
    this.quotesService.removeFromFavourite(quote);
    this.favouriteQuotes = this.quotesService.getFavouritedQuotes();
  }

}
