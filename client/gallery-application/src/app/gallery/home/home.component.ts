import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PhotoAddUpdateComponent } from '../photo-add-update/photo-add-update.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albums:any=[]
  photos:any=[]

  constructor(
    public api:ApiService,
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.api.get())
    this.getAlbums()
  }

  getAlbums(){
    this.api.get('/galleries/albums').subscribe(result => {
      this.albums = result
    })
  }

  addPhoto(data, idx){
    let dialog = this.dialog.open(PhotoAddUpdateComponent, {
      width: '400px',
      data: data
    })
    dialog.afterClosed().subscribe(res => {
      if (res){
        if (idx===-1) {
          console.log(data)
          this.api.post('/galleries', data).subscribe(result => {
            console.log(result)
            
          })
        }
        else this.photos[idx] = res
        console.log(this.photos,'-----')
        this.router.navigate['/galleries'+data.albumId]
      }
    })
  }
}
