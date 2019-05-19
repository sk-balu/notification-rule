import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rule } from '../../models/rule.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RulesService {

  private apiURL = 'api/rules';

  constructor( private http: HttpClient) { }

  getRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>( this.apiURL );
  }

  addRule( rule: Rule): Observable<Rule> {
    return this.http.post<Rule>( this.apiURL, rule, httpOptions );
  }

  updateRule( rule: Rule): Observable<Rule> {
    return this.http.put<Rule>( this.apiURL, rule, httpOptions );
  }

  getRule( id: number ): Observable<Rule> {
    return this.http.get<Rule>( `${this.apiURL}/${id}` );
  }

  deleteRule( id: number ): Observable<Rule> {
    return this.http.delete<Rule>( `${this.apiURL}/${id}`, httpOptions );
  }

  searchRule( term: string ): Observable<Rule[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Rule[]>(`${this.apiURL}/?name=${term}`);
  }
}
