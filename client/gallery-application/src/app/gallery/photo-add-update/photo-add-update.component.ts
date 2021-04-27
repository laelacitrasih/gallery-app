import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-add-update',
  templateUrl: './photo-add-update.component.html',
  styleUrls: ['./photo-add-update.component.scss']
})
export class PhotoAddUpdateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PhotoAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  saveData(){
    this.dialogRef.close(this.data)
    this.router.navigate(['']);
  }

}
