export class SettingsService {
  isAlternativeBackground = false;

  setAlternativeBackground() {
    this.isAlternativeBackground = true;
    console.log(this.isAlternativeBackground)
  }

  unsetAlternativeBackground() {
    this.isAlternativeBackground = false;
    console.log(this.isAlternativeBackground)
  }
}
