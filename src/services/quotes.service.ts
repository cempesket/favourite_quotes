import {Quote} from "../data/quotes.interface";
import {Subject} from "rxjs/Subject";

export class QuotesService {

  private favouriteQuotes: Quote[] = [];

  getFavouritedQuotes() {
    return this.favouriteQuotes.slice();
  }

  addToFavourite(quote: Quote) {
    this.favouriteQuotes.push(quote)
  }

  removeFromFavourite(quote: Quote) {
    console.log(quote);
    this.favouriteQuotes.splice(this.favouriteQuotes.findIndex((quoteEl: Quote) => {
      return quote.id == quoteEl.id
    }),1);
    console.log(this.favouriteQuotes)
  }

  isFavourited(quote: Quote): boolean {
    return !!(this.favouriteQuotes.find((quoteEl: Quote) => {
      return quote.id == quoteEl.id;
    }))
  }
}
