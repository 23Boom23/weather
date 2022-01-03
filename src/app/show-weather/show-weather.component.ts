import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {
  @Input() cities = ''
  temperature = '';
  pressure = '';
  humidity = '';
  city: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
