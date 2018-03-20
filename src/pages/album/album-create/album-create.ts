import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {AlbumElement} from "../../../data/album-element";
import {NgForm} from "@angular/forms";
import {AlbumService} from "../../../services/album.service";
@Component({
  selector: 'album-create-page',
  templateUrl: 'album-create.html'
})
export class AlbumCreatePage implements OnInit {
  data: AlbumElement = {title: '', description: '', imageData: '',created: new Date()};

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public albumService: AlbumService) {

  }

  ngOnInit() {
    this.data.imageData = this.navParams.get('imageData')
  }

  onSubmit(form: NgForm) {
    this.data.title = form.value.title;
    this.data.description = form.value.description;


    this.albumService.addToAlbum(this.data);
    this.viewCtrl.dismiss().catch(err => console.log(err))
  }

}
