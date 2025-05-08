import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipes.model';
import { NewRecipeService } from '@modules/new-recipe/services/new-recipe.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-new-recipe-page',
  standalone: false,
  templateUrl: './new-recipe-page.component.html',
  styleUrl: './new-recipe-page.component.css'
})
export class NewRecipePageComponent implements OnInit{
  newRecipe?: RecipeModel

  constructor(private newRecipesService: NewRecipeService){}

  ngOnInit(): void {
    
    this.addNewRecipe()
  }
  async addNewRecipe(): Promise<any> {
        this.newRecipe = await lastValueFrom(this.newRecipesService.addRecipe$())
      }
}
