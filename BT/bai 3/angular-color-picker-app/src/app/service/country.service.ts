import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../model/country";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(API_URL + '/countries');
  }

  saveCity(country: any): Observable<Country> {
    return this.http.post<Country>(API_URL + '/countries', country);
  }

  findById(id: number): Observable<Country> {
    return this.http.get<Country>(`${API_URL}/countries/${id}`);
  }

  updateCity(id: number, country: Country): Observable<Country> {
    return this.http.put<Country>(`${API_URL}/countries/${id}`, country);
  }

  deleteCity(id: number): Observable<Country> {
    return this.http.delete<Country>(`${API_URL}/countries/${id}`);
  }
}
