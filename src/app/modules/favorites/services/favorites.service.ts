import { Injectable } from '@angular/core';
import { RecipeModel } from '@core/models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private key = 'favorites';

  constructor() { }

  getFavorites(): RecipeModel[]{
    return JSON.parse(localStorage.getItem(this.key) || '[]')
  }

  addFavorites(recipe: RecipeModel): void{
    const favorites = this.getFavorites();
    const sameId = favorites.some(f=>f._id === recipe._id);
    if(!sameId){
      favorites.push(recipe);
      localStorage.setItem(this.key, JSON.stringify(favorites))
    }
  }
}
