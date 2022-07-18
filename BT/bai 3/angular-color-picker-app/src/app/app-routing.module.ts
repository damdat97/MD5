import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordDetailComponent} from "./word/word-detail/word-detail.component";
import {DictionaryPageComponent} from "./word/dictionary-page/dictionary-page.component";


const routes: Routes = [
  {
    path: 'dictionary', component: DictionaryPageComponent,
    children: [
      {
        path: ':word', component: WordDetailComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
