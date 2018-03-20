import {Component} from '@angular/core';
import {IonicPage,NavParams, ViewController} from 'ionic-angular';
import {QuotesService} from "../../../services/quotes.service";

/**
 * Generated class for the QuoteEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote-edit',
  templateUrl: 'quote-edit.html',
})
export class QuoteEditPage  {
  author;
  text;

  constructor(private navParams: NavParams, private viewCtrl: ViewController, private quotesService: QuotesService) {
  }

  ionViewDidEnter() {
    this.text = this.navParams.get('text');
    this.author = this.navParams.get('person')
  }

  onClose() {
    this.viewCtrl.dismiss().catch()
  }

  onUnfavourite() {
    this.quotesService.removeFromFavourite(this.navParams.data);
    this.viewCtrl.dismiss().catch()

  }


}
