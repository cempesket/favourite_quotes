import {Component} from '@angular/core';
import {IonicPage, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings.service";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  isToggled = false;

  constructor(private settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    this.isToggled = this.settingsService.isAlternativeBackground;
    console.log('ionViewDidLoad SettingsPage');
  }

  toggle(event: Toggle) {
    if (event.checked) {
      this.settingsService.setAlternativeBackground()
    } else {
      this.settingsService.unsetAlternativeBackground()
    }
  }

}
