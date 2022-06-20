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
  // providers: [DemoService],
})
export class DemoComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  slide$: Observable<number> = new Observable();
  slideParam: Params = {
    slide: 1,
  };
  // ****** path changing *******
  // seletedSlide$: Observable<string | null> = new Observable();

  // slide: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private demoService: DemoService
  ) {
    console.log('DEMO COMPONENT INIT');
    // ****** path changing *******
    // this.seletedSlide$ = this.route.paramMap.pipe(
    //   map((params) => params.get('id')),
    //   tap((params) => console.log('params: ', params))
    // );
  }

  ngOnInit(): void {
    this.slide$ = this.route.queryParams.pipe(
      tap((param: any) => {
        console.log(param);
      }),
      map((param) => param.slide)
    );
    this.subscription = this.slide$.subscribe((param) => {
      console.log(param);
      this.slideParam.slide = param ? +param : 1;
      // this.getCurrentSlide();
    });
    this.getCurrentSlide();

    // ****** path changing *******
    // this.subscription = this.seletedSlide$.subscribe(
    //   (param) => (this.slide = param ? +param : 0)
    // );
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

    // ****** path changing *******
    // this.slide += 1;
    // this.router.navigate([`demo/${this.slide}`]);
  }

  previousSlide(): void {
    this.slideParam.slide -= 1;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.slideParam,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });

    // ****** path changing *******
    // this.slide > 1 ? (this.slide -= 1) : 1;
    // this.router.navigate([`demo/${this.slide}`]);
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
