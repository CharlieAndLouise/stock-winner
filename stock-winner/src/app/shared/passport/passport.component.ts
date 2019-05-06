import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {

  constructor() { }

  userName: string;
  password: string;

  ngOnInit() {
  }

  loginByGithub() {
    let clientId = environment.github_clientId;
    let loginUrl = "https://github.com/login/oauth/authorize?client_id=" + clientId;
    loginUrl += "&redirect_uri=" + encodeURIComponent(environment.redirectUrl);
    loginUrl += "&scope=user";

    window.location.href = loginUrl;
  }
}
