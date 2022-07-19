import { Component, OnInit } from '@angular/core';
import {Country} from "../../model/country";
import {CountryService} from "../../service/country.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countriesService: CountryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.countriesService.getAll().subscribe(countries => {
      console.log(countries)
      this.countries = countries;
    });
  }

}
