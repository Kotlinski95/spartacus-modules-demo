import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  // providers: [DemoService],
})
export class SlidesComponent implements OnInit {
  codeGenerateModule = `
EPAM-C02X377YJGH6:spartacus-modules-demo adrian_kotlinski$ ng generate module custom-components/module-test
CREATE src/app/custom-components/module-test/module-test.module.ts (196 bytes)

`;
  codeGenerateComponent = `EPAM-C02X377YJGH6:spartacus-modules-demo adrian_kotlinski$ ng generate component  custom-components/module-test
CREATE src/app/custom-components/module-test/module-test.component.scss (0 bytes)
CREATE src/app/custom-components/module-test/module-test.component.html (26 bytes)
CREATE src/app/custom-components/module-test/module-test.component.spec.ts (655 bytes)
CREATE src/app/custom-components/module-test/module-test.component.ts (295 bytes)
UPDATE src/app/custom-components/module-test/module-test.module.ts (286 bytes)`;
  seletedSlide$: Observable<string | null> = new Observable();
  constructor(private route: ActivatedRoute, private demoService: DemoService) {
    // ****** path changing *******
    // this.seletedSlide$ = this.route.paramMap.pipe(
    //   map((params) => params.get('id')),
    //   tap((params) => console.log("params: ",params)));

    this.seletedSlide$ = this.route.queryParamMap.pipe(
      map((params) => params.get('slide')),
      tap((params) => console.log('params: ', params))
    );
  }

  ngOnInit(): void {
    // this.seletedSlide$.subscribe();
  }
  sayHi() {
    this.demoService.sayHello();
  }
}
