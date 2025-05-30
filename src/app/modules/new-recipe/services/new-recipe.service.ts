import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientModel } from '@core/models/ingredient.model';
import { RecipeModel } from '@core/models/recipes.model';
import { count } from 'console';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewRecipeService {
  private readonly URL = environment.api
  
  constructor(private httpClient: HttpClient) { }
  
  sendRecipe$(name: string, description: string, img: string, nameIngredient: string, number: number): void{
    console.log('pasa por el servicio la receta: ', name, description, img, nameIngredient, number)
  }

  addRecipe$(nameRecipe: string, description: string, img: string, nameIngredient: string,
     number: number): Observable<any>{
    const dataNewRecipe = {
      nameRecipe: nameRecipe, description, img,
      ingredients: [
        {name: nameIngredient}, 
        {count: number} 
      ]
    };
    return this.httpClient.put(`${this.URL}/recipes/add`, dataNewRecipe)
    .pipe(
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Algo paso en Recipe, Revisamee', [status, statusText]);
        return of([])
       })
    )
  }
}
