import {Component, OnInit} from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

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
export class QuoteEditPage implements OnInit {
  author;
  text;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.text = this.navParams.get('text');
    this.author = this.navParams.get('person')

  }

  onClose() {
    this.viewCtrl.dismiss().catch()
  }


}
