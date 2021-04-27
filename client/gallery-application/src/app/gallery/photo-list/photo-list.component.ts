import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos:any=[]
  albumId:any

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = (routeParams.get('albumId'));
    this.albumId = albumIdFromRoute
    this.getPhotos(albumIdFromRoute)
  }

  getPhotos(params){
    this.api.get(`/galleries/albums/${params}`).subscribe(result => {
      this.photos = result
    })
  }

  deletePhoto(params){
    this.api.del(`/galleries/${params}`).subscribe(result => {
      if (result){
        let arr = this.photos
        // console.log(result['id'])
        this.photos = []
        for (let i=0; i<arr.length; i++){
          if (+arr[i].id !== +result['id'])
          this.photos.push(arr[i])
        }
      }
    })
  }

  updatePhoto(params){
    
  }

}
