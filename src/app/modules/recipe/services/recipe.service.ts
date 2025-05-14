import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly URL = environment.api
  
  constructor(private httpClient: HttpClient, private cookie: CookieService) { }
  
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
  
  deleteRecipe$(): Observable<any>{
    //{{url}}/api/recipes/delete/64089c0a680f4d2b962b38ba?auth={{token}}
    return this.httpClient.get(`${this.URL}/recipes/delete/{id}`)
    .pipe(
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Algo paso en Recipe, Revisamee', [status, statusText]);
        return of([])
       })
    )
  }

  searchRecipe$(term:string):Observable<any>{
    return this.httpClient.get(`${this.URL}/recipes?src=${term}`)
  }
}
