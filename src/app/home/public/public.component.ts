import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})

export class PublicComponent implements OnInit {

  testArr = [];

  constructor() {
    for (let i = 0; i<100; i++) {
      this.testArr.push(i);
    }
  }

  ngOnInit() {

  }
}
