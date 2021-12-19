import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weatherApi';
  cities: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  // ipKey 7f7cc2ea-568f-4dae-9358-12518c1b7c7d

  onClick() {
    const domain = 'http://api.airvisual.com';
    const endpoint = 'v2/cities';
    const APIKey = '7f7cc2ea-568f-4dae-9358-12518c1b7c7d';
    const APIparams = {
      state: 'California',
      country: 'USA',
      key: APIKey,
    };

    const url = `${domain}${endpoint}`;
    this.http
      .get(url, { params: APIparams })
      .pipe(tap((res) => console.log(res)))
      .subscribe((el: any) => {
        this.cities = el;
      });
  }
}
