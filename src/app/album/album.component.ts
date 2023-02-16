import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  albums:any;
  constructor(private service: AlbumService) // injection de dépencences
  { }

  ngOnInit(): void {

    this.service.getData().subscribe(
      data => {
        this.albums = data;
        console.log(this.albums);
      }
    );
  }

}
