import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss'],
})
export class ShowWeatherComponent {
  cities = [];
  @Input() WeatherInfo = {
    temperature: '',
    pressure: '',
    humidity: '',
    city: null,
  };
  constructor(private http: HttpClient) {}
}
