import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DbService } from '../shared/db.service';

@Component({
  moduleId: module.id,
  selector: 'app-groupes',
  providers: [DbService],
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss']
})
export class GroupesComponent implements OnInit {

  constructor(private router: Router, private routerExtensions: RouterExtensions, private db: DbService) { }

  ngOnInit() { }

}
