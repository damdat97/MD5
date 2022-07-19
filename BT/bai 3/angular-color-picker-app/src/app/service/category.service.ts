import {Injectable} from '@angular/core';
import {City} from '../model/city';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(API_URL + '/categories');
  }

  saveCategory(category: any): Observable<City> {
    return this.http.post<City>(API_URL + '/categories', category);
  }

  findById(id: number): Observable<City> {
    return this.http.get<City>(`${API_URL}/categories/${id}`);
  }

  updateCategory(id: number, category: City): Observable<City> {
    return this.http.put<City>(`${API_URL}/categories/${id}`, category);
  }

  deleteCategory(id: number): Observable<City> {
    return this.http.delete<City>(`${API_URL}/categories/${id}`);
  }
}
