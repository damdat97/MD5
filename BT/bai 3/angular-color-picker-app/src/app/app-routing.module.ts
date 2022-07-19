import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'cities',
    loadChildren: () => import('./city/city.module').then(module => module.CityModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./country/country.module').then(module => module.CountryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
