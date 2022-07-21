import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: any;

  form =  new FormGroup( ({
    from: new FormControl(''),
    to: new FormControl('')
  }))

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

  find() {
    const from = this.form.value.from;
    const to = this.form.value.to;
    this.cityService.findByArea(from, to).subscribe((data) => {
      console.log(data);
      this.cities = data
    })
  }
}
