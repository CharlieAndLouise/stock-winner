import { Component, OnInit } from '@angular/core';

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

}
