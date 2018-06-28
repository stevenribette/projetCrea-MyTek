import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpen = false;
  constructor(private router: Router, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    
  }
  open_close(){
    this.isOpen = !this.isOpen;
  }
  goTo(link) {
    this.isOpen = false;
    this.routerExtensions.navigate([link]);
  }

}
