import {Component} from "@angular/core";
import {HomePage} from "../home/home";
import {LibraryPage} from "../library/library";
@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homePage = HomePage;
  libraryPage = LibraryPage
}
