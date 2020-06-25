import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-me-test',
  template: `
      <div>
        This is public facing, anyone can see this without logging in.
      </div>
    <h1 *ngFor="let i of testArr">
      Line {{i}}
    </h1>
  `
})

export class DeleteMeComponent implements OnInit {

  testArr = [];

  constructor() {
    for (let i = 0; i<100; i++) {
      this.testArr.push(i);
    }
  }

  ngOnInit() {

  }
}
