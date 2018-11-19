import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private users;
  public  loggedUser;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  // login(username, password){
  //   this.api.get().subscribe(res => this.users = res)

  //   setTimeout(() => {

  //     this.loggedUser = this.users.find(x => x.name === username && x.surname === password);

  //     if(this.loggedUser){
  //       this.router.navigate(['/index']);
  //     }else{
  //       alert("Wrong username or password")
  //     }

  //   },500)
  // }

}
