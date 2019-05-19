import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Convention } from 'src/app/models/convention.model';
import { Observable } from 'rxjs';

@Injectable()
export class ConventionsService {

  private apiURL = 'api/conventions';

  constructor( private http: HttpClient ) { }
  getConventions(): Observable<Convention> {
    return this.http.get<Convention>( this.apiURL );
  }
}
