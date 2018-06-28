import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { DbService } from "../shared/db.service";

require( "nativescript-localstorage" );

@Component({
  moduleId: module.id,
  selector: 'app-login',
  providers: [DbService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  pseudo: string;
  password: string;
  shared = false;
  isLoggingIn = true;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private db: DbService) {}

  ngOnInit() { }

  submit() {
    if(this.isLoggingIn==true){
      this.connect();
    }else{
      this.subscribe();
    }
  }
  connect(){
    this.db.checkUser(this.pseudo,this.password).subscribe(data => {
      let d = data.json();
      if(d.use_id != false){
        localStorage.setItem('use_id', d.use_id);
        this.router.navigate(["app/mediatek"]);
      }
    });
  }
  subscribe(){
    if(this.checkSub()!=false){
      this.db.addUser(this.pseudo,this.password, this.shared).subscribe(data => {
        this.routerExtensions.navigate(["login"]);
      });
    }else{
      alert("Infos incorrectes!!!");
    }
  }
  checkSub(){
    if(this.pseudo.length>0 && this.checkPass()==true){
      return true;
    }else{
      return false;
    }
  }
  checkPass(){
    if(this.password.length>4){
      return true;
    }else{
      return false;
    }
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
