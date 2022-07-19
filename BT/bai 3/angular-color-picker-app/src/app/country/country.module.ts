import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryCreateComponent } from './country-create/country-create.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryDeleteComponent } from './country-delete/country-delete.component';


@NgModule({
  declarations: [
    CountryCreateComponent,
    CountryEditComponent,
    CountryDeleteComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
