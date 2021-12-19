import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'behavioursubject';

  value = 0;
  ngOnInit() {
    const random = new BehaviorSubject(0);
    function value() {
      const rand = Math.round(Math.random() * 1000);
      random.next(rand);
    }
    setInterval(value, 1000);

    random
      .pipe(filter((value: number) => value >= 300 && value <= 700))
      .subscribe((el) => (this.value = el));
  }
}
