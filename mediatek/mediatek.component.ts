import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DbService } from '../shared/db.service';

@Component({
  moduleId: module.id,
  selector: 'app-mediatek',
  providers: [DbService],
  templateUrl: './mediatek.component.html',
  styleUrls: ['./mediatek.component.scss']
})
export class MediatekComponent implements OnInit {

  id: Number;
  user: Number;
  name: string;
  fiches = [];
  search: String;
  searchs = [];
  
  constructor(private router: Router, private routerExtensions: RouterExtensions, private db: DbService) { }

  ngOnInit() {
    this.user = parseInt(localStorage.getItem('use_id'));
    //this.fiches = [{ "fic_id": 1, "fic_name": "JURASSIC PARK", "fic_img": "~/images/jurassic-park.jpg" }, { "fic_id": 2, "fic_name": "GODZILLA", "fic_img": "~/images/godzilla.jpg" }];
    
    this.db.getUser(this.user).subscribe(data =>{
      this.id = data.mediatek_id;
      this.db.getMediatekFiches(this.id).subscribe(data =>{
        this.fiches = data.json();
      });
    });
    
  }
  goTo(id){
    this.router.navigate(["app/fiche/", id]);
  }
  doSearch(){
    if(this.search != null){
      this.db.omdbSearch(this.search).subscribe(data =>{
        this.searchs = data.json().search;
      });
    }
  }

}
