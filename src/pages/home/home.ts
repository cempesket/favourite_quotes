import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quotes.interface";
import {QuoteEditPage} from "./quote-edit/quote-edit";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  favouriteQuotes: Quote[];

  constructor(private quotesService: QuotesService, private modalCtrl: ModalController) {

  }

  ionViewDidEnter() {
    this.favouriteQuotes = this.quotesService.getFavouritedQuotes();
    console.log(this.favouriteQuotes);
  }

  ngOnInit() {


  }

  onSelectQuote(quote: Quote) {

    const modal = this.modalCtrl.create(QuoteEditPage, quote);
    modal.present().catch();
  }

}
