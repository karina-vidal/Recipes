import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditRecipeService {
  private readonly URL = environment.api
  private id: string = ''
  
  constructor(private httpClient: HttpClient) { }
  
  sendRecipe$(name: string, description: string, img: string, nameIngredient: string, number: number): void{
    console.log('pasa por el servicio la receta: ', name, description, img, nameIngredient, number)
  }

  editRecipe$(nameRecipe: string, description: string, img: string, nameIngredient: string,
    number: number): Observable<any>{
    const dataNewRecipe = {
      nameRecipe: nameRecipe, description, img,
      ingredients: [
        {name: nameIngredient}, 
        {count: number} 
      ]
    };
    //{{url}}/api/recipes/edit/6408ed4a95b4d2f23c615b3c?auth={{token}}
    return this.httpClient.put(`${this.URL}/recipes/edit/${this.id}`, dataNewRecipe)
    .pipe(
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Algo paso en Recipe, Revisamee', [status, statusText]);
        return of([])
       })
    )
  }
}
