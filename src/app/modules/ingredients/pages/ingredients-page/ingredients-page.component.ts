import { Component, OnDestroy, OnInit } from '@angular/core';
import { IngredientModel } from '@core/models/ingredient.model';
import { RecipeModel } from '@core/models/recipes.model';
import { IngredientsService } from '@modules/ingredients/services/ingredients.service';
import { response } from 'express';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ingredients-page',
  standalone: false,
  templateUrl: './ingredients-page.component.html',
  styleUrl: './ingredients-page.component.css'
})
export class IngredientsPageComponent implements OnInit{
  recipeList: Array<RecipeModel> = []
  ingredients: IngredientModel[] = []
  ingredientsList?: {name: string; amount:number}[] 

  constructor(private ingredientService: IngredientsService) {}

  ngOnInit(): void {
    this.loadDataAll()
  }
  
  async loadDataAll(): Promise<any> {
    this.recipeList = await lastValueFrom(this.ingredientService.getAllRecipes$())
    this.ingredients = this.recipeList.flatMap(u=>u.ingredients ?? [])
    const names: string[] = this.ingredients.map(i=>i.name)
    this.ingredientsList = await this.ingredients.map( i=> ({
      name: i.name,
      amount: i.amount
    })
    )
  }
}
