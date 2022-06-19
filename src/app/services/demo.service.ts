import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class DemoService {
  timestamp = Date.now();
  timestampcounter = 0;
  sayHello() {
    console.log(
      '%c HELLO: ',
      'color:green; font-family:serif; font-size: 20px',
      this.timestamp,
      'counter: ',
      this.timestampcounter++
    );
  }
}
