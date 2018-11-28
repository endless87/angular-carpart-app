import {Injectable} from '@angular/core';
import {CARPARTS} from './mocks';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {url} from 'inspector';

@Injectable({'providedIn': 'root'})
export class CarpartsDataService {

  constructor(private httpClient: HttpClient) {
    console.log('log CarpartsDataService');
  }

  getCarParts(): Observable<any> {
    return this.httpClient.get('assets/car-part.json' , {responseType : 'json'});
  }
}
