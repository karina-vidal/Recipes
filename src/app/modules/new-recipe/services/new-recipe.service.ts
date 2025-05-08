import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewRecipeService {
  private readonly URL = environment.api
  
  constructor(private httpClient: HttpClient, private cookie: CookieService) { }
  
  addRecipe$(): Observable<any>{
    const token = this.cookie.get('token')
    return this.httpClient.put(`${this.URL}/recipes?auth=${token}`,null)
    .pipe(
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Algo paso en Recipe, Revisamee', [status, statusText]);
        return of([])
       })
    )
  }
}
