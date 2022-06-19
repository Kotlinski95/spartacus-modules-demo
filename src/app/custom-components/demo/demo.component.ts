import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type Params = {
  [key: string]: any;
};

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  slide$: Observable<number> = new Observable();
  slideParam: Params = {
    slide: 1,
  };
  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('DEMO COMPONENT INIT');
  }

  ngOnInit(): void {
    this.slide$ = this.route.queryParams.pipe(
      tap((param: any) => {
        console.log(param);
      }),
      map(param => param.slide)
    );
    this.slide$.subscribe((param) => {
      console.log(param);
      this.slideParam.slide = +param;
    });
    this.getCurrentSlide();
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
}
