import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) { }

  getAllRecipes$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/recipes`)
    .pipe(
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Algo paso en Recipe, Revisamee', [status, statusText]);
        return of([])
       })
    )
  }
}
