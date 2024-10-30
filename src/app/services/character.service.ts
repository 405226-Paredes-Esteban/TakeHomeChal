import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly httpClient = inject(HttpClient);
  private baseUrl:string = 'https://rickandmortyapi.com/api/character/';

  getCharacters(name:string, pageNumber:number):Observable<Page>{
    return this.httpClient.get<Page>(this.baseUrl+'?page='+pageNumber+'&name='+name);
  }
}