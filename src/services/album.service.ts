import {AlbumElement} from "../data/album-element";
import {Subject} from "rxjs/Subject";
export class AlbumService {
  private albumElements: AlbumElement[] = [];
  newImageEvent = new Subject<AlbumElement[]>();

  addToAlbum(albumElement: AlbumElement) {
    this.albumElements.push(albumElement);
    this.newImageEvent.next(this.albumElements.slice());
  }

  getAlbum() {
    return this.albumElements.slice()
  }

  removeFromAlbum(image: AlbumElement) {
    this.albumElements.splice(this.albumElements.findIndex((img: AlbumElement) => {
      return img.title === image.title
    }), 1);
    this.newImageEvent.next(this.albumElements.slice());
  }
}
