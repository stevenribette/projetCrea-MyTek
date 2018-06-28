import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DbService } from '../shared/db.service';

@Component({
  moduleId: module.id,
  selector: 'app-fiche',
  providers: [DbService],
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  user: Number;
  id: Number;
  name: string;
  img: string;
  url: string;
  notes = [];
  avis = [];
  visionner: boolean;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private db: DbService, private route: ActivatedRoute) {
    this.route.params.forEach((params) => {this.id = +params["id"]}); 
  }

  ngOnInit() {
    this.user = parseInt(localStorage.getItem('use_id'));
    /*
    if(this.id==1){
      this.name= "JURASSIC PARK"; 
      this.img = "~/images/jurassic-park.jpg";
      this.url = "http://www.omdbapi.com/?t=jurassic+park";
      this.notes = [{"use_id":1, "not_value": 5}, {"use_id":2, "not_value": 3}];
      this.avis = [{"use_id":1, "avi_contenu": "Passionnant"}, {"use_id":2, "avi_contenu": "Bof, nostalgique mais sans plus"}];
      this.visionner = true;
    }else if(this.id==2){
      this.name= "GODZILLA"; 
      this.img = "~/images/godzilla.jpg";
      this.url = "http://www.omdbapi.com/?t=godzilla";
      this.notes = [{"use_id":1, "not_value": 2}, {"use_id":2, "not_value": 4}];
      this.avis = [{"use_id":1, "avi_contenu": "Frause le ridicule cinématographique"}, {"use_id":2, "avi_contenu": "Très bon moment malgré le fait que godzilla ressemble un peu trop à un dinosaure"}];
      this.visionner = true;
    }
    */
    
    this.db.getFiche(this.id).subscribe(data =>{
      data = data.json();
      this.name = data.fic_name;
      this.img = data.fic_img;
      this.url = data.fic_url;
    });
    /*
    this.db.getNotes(this.id).subscribe(data =>{
      this.notes = data.json();
    });
    this.db.getAvis(this.id).subscribe(data =>{
      this.avis = data.json();
    });
    this.db.getVisionner(this.user,this.id).subscribe(data =>{
      this.visionner = data.json().vis_statut;
    });
    */
  }



}
