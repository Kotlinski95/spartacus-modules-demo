import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() {
    console.log("DEMO COMPONENT INIT");
   }

  ngOnInit(): void {
  }

}