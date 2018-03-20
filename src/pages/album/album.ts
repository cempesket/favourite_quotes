import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {AlbumService} from "../../services/album.service";
import {AlbumElement} from "../../data/album-element";
import {AlertController, ModalController} from "ionic-angular";
import {AlbumCreatePage} from "./album-create/album-create";
@Component({
  selector: 'album-page',
  templateUrl: 'album.html'
})
export class AlbumPage implements OnInit, OnDestroy {
  images: AlbumElement[] = [];
  subscription: Subscription;
  errorMsg = "";
  options: CameraOptions = {
    quality: 100,
    targetWidth: 900,
    targetHeight: 1000,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.ALLMEDIA,
    saveToPhotoAlbum: false,
    allowEdit: true,
    sourceType: 1
  };

  constructor(private camera: Camera,
              private albumService: AlbumService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.subscription = this.albumService.newImageEvent.subscribe((imageData) => {
      this.images = imageData;
    });
  }

  ionViewDidLoad() {
    this.images = this.albumService.getAlbum()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCameraOpen() {
    this.camera.getPicture(this.options).then((imageData) => {
      const data = {imageData: 'data:image/jpeg;base64,' + imageData};
      this.modalCtrl.create(AlbumCreatePage, data).present().catch()
    }, (err) => {
      console.log(err);
      this.errorMsg = err;
    });
  }

  remove(image) {
    this.alertCtrl.create({
      title: 'Remove Photo',
      subTitle: 'Are you sure you want to remove?',
      message: 'There is no going back!',
      buttons: [{
        text: 'Ok', handler: () => {
          this.albumService.removeFromAlbum(image)
        }
      },
        {
          text: 'Cancel',
          role: 'cancel'
        }]

    }).present().catch();

  }
}
