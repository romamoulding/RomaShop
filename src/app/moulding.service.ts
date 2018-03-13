import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Moulding } from './moulding';
//import { MOULDINGS } from './mock-mouldings';




@Injectable()



export class MouldingService {

  constructor(private http: HttpClient) { }

  private appUrl = 'http://beta-store.romamoulding.com/';

  getMouldings(): Observable<Moulding[]> {
    return this.http.get<Moulding[]>(this.appUrl+"api/getproducts")
    .pipe(
      tap(mouldings => this.log(`fetched mouldings`)),
      catchError(this.handleError('getMouldings', []))
    );
  }



  


  searchMouldings(term: string): Observable<Moulding[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }else{
      return of([]);
    }
    
    
  }



  



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }


}

