import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

type Params = {
  [key: string]: any;
};

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  slide$: Observable<number> = new Observable();
  slideParam: Params = {
    slide: 1,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private demoService: DemoService
  ) {
  }

  ngOnInit(): void {
    this.slide$ = this.route.queryParams.pipe(
      map((param) => param.slide)
    );
    this.subscription = this.slide$.subscribe((param) => {
      this.slideParam.slide = param ? +param : 1;
      // this.getCurrentSlide();
    });
    this.getCurrentSlide();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextSlide(): void {
    this.slideParam.slide += 1;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.slideParam,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  previousSlide(): void {
    this.slideParam.slide -= 1;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.slideParam,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  getCurrentSlide(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.slideParam,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }
  sayHi() {
    this.demoService.sayHello();
  }
}
