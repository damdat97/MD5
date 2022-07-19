import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Country} from "../../model/country";
import {CityService} from "../../service/city.service";
import {CountryService} from "../../service/country.service";

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  cityForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    area: new FormControl(''),
    population: new FormControl(''),
    gdp: new FormControl(''),
    description: new FormControl(''),
    countryId: new FormControl('')
  });
  obj: any;
  listCountry: Country[] = []

  constructor(private citiesService: CityService,
              private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getAll().subscribe((data)=> {
      console.log(data)
      this.listCountry = data
    })
  }

  submit() {
    this.obj = {
      name: this.cityForm.value.name,
      country: {
        id: this.cityForm.value.countryId
      },
      area: this.cityForm.value.area,
      population: this.cityForm.value.population,
      gdp: this.cityForm.value.gdp,
      description: this.cityForm.value.description
    }
    console.log(this.obj)
    this.citiesService.saveCity(this.obj).subscribe((data) => {
      console.log(data)
      alert("Thanh cong!");
      // @ts-ignore
      $("#exampleModal").modal("hide");
      this.cityForm.reset()
    }, error => {
      alert("Loi");
      console.log(error)
    })
  }

}
