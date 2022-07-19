import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.cityService.getAll().subscribe(cities => {
      console.log(cities)
      this.cities = cities;
    }, error => {
      console.log(error)
    });
  }

}
