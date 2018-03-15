import {Quote} from "../data/quotes.interface";
import {Subject} from "rxjs/Subject";

export class QuotesService {

  private favouriteQuotes: Quote[] = [{
    id: '1',
    person: 'Theodore Roosevelt',
    text: 'Believe you can and you\'re halfway there'
  }];

  quoteSubject: Subject<Quote[]>;

  getFavouritedQuotes() {
    return this.favouriteQuotes.slice();
  }

  addToFavourite(quote: Quote) {
    this.favouriteQuotes.push(quote)
  }

  removeFromFavourite(quote: Quote) {
    this.favouriteQuotes.splice(this.favouriteQuotes.findIndex((quoteEl: Quote) => {
      return quote.id == quoteEl.id
    }),1)
  }

  isFavourited(quote: Quote): boolean {
    this.quoteSubject.next();
    return !!(this.favouriteQuotes.find((quoteEl: Quote) => {
      return quote.id == quoteEl.id;
    }))
  }
}
