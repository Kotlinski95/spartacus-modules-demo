import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.scss'],
})
export class Slide2Component implements OnInit {
  constructor(private demoService: DemoService) {}

  ngOnInit(): void {}
  sayHi() {
    this.demoService.sayHello();
  }
}
