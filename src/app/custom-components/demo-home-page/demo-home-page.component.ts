import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-demo-home-page',
  templateUrl: './demo-home-page.component.html',
  styleUrls: ['./demo-home-page.component.scss'],
})
export class DemoHomePageComponent implements OnInit {
  constructor(private demoService: DemoService) {}

  ngOnInit(): void {}
  sayHi() {
    this.demoService.sayHello();
  }
}
