import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DbService } from '../shared/db.service';

@Component({
  moduleId: module.id,
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  gro_id = null;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private db: DbService, private route: ActivatedRoute) {
    this.route.params
      .forEach((params) => {this.gro_id = +params["gro_id"]});
  }

  ngOnInit() {

  }
}