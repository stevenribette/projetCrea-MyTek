import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DbService } from '../shared/db.service';

require( "nativescript-localstorage" );

@Component({
  moduleId: module.id,
  selector: 'app-user',
  providers: [DbService],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: Number;
  pseudo: string;
  img: string;
  share: boolean;
  userData;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private db: DbService) { }

  ngOnInit() {
    this.id = parseInt(localStorage.getItem('use_id'));
    
    this.pseudo = "Steven";
    this.img = "http://bloper97.fr/r/bloper97/img/profile.png";
    this.share = true;
    this.userData = { "pseudo" : this.pseudo, "img" : this.img, "share" : this.share };

    
    this.db.getUser(this.id).subscribe(data => {
      this.userData = data.json();
      this.pseudo = this.userData.use_name;
      this.img = this.userData.use_img;
      this.share = this.userData.use_share;
    });
  }
  editData(){
    if(this.userData.use_name != this.pseudo){
      this.db.setUserName(this.id, this.pseudo).subscribe(data => {
        alert("Pseudo change");
      });
    }
    if(this.userData.use_img != this.img){
      this.db.setUserImg(this.id, this.img).subscribe(data => {
        alert("Image change");
      });
    }
    if(this.userData.use_share != this.share){
      this.db.setUserShare(this.id, this.share).subscribe(data => {
        alert("Mediatek visibility change");
      });
    }
  }
}
