import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private httpClient = inject(HttpClient);
  
  getLocation(url:string):Observable<Location>{
    return this.httpClient.get<Location>(url);
  }
}
