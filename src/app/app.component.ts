import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weatherApi';
  cities = [];
  temperature = '';
  pressure = '';
  humidity = '';
  city: any;
  constructor(private http: HttpClient) {}
  // 7f7cc2ea-568f-4dae-9358-12518c1b7c7d

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

    const url = `${domain}/${endpoint}`;
    this.http
      .get(url, { params: APIparams })
      .pipe(map((res: any) => res.data))
      .subscribe((el: any) => {
        this.cities = el.map((list: any) => list.city);
      });
  }

  onWeather(event:any) {
    this.city = event.target.textContent;
    const domain = 'http://api.airvisual.com';
    const endpoint = 'v2/city';
    const APIKey = '7f7cc2ea-568f-4dae-9358-12518c1b7c7d';
    const APIparams = {
      city: `${this.city}`,
      state: 'California',
      country: 'USA',
      key: APIKey,
    };

    const url = `${domain}/${endpoint}`;
    this.http.get(url, { params: APIparams }).subscribe((el: any) => {
      console.log(
        '🚀 ~ file: app.component.ts ~ line 55 ~ AppComponent ~ this.http.get ~ el',
        el
      );

      this.city = el.data;
      this.temperature = el.data.current.weather.tp;
      this.humidity = el.data.current.weather.hu;
      this.pressure = el.data.current.weather.pr;
    });
  }
  
}
