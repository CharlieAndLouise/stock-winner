import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/core/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-identity-token',
  templateUrl: './identity-token.component.html',
  styleUrls: ['./identity-token.component.sass']
})
export class IdentityTokenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (!!params.code) {
          this.getCurrentUserInformation(params.code)
        }
        else {
          
          //todo: redirect to error page
        }
      }
    )
  }

  private getCurrentUserInformation(code: string) {
    let token_url = "https://github.com/login/oauth/access_token";
    token_url += "?client_id=" + environment.github_clientId;
    token_url += "&client_secret=" + environment.github_scret;
    token_url += "&code=" + code;
    token_url += "&redirect_url=" + encodeURIComponent(environment.redirectUrl);
    //token_url += "&callback=foo";

    this.http.nativeHttp.post(token_url, ).subscribe(
      (body)=> { alert(body); }
    );
  }

}
