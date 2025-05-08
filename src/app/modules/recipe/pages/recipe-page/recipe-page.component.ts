import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from '@core/models/recipes.model';
import { RecipeService } from '@modules/recipe/services/recipe.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-recipe-page',
  standalone: false,
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent implements OnInit{
    mainMenu: {    defaultOptions: Array<any>  } = { defaultOptions: [] }
    @Input() dataTracks: Array<any> = []
    recipeList: Array<RecipeModel> = []
    constructor(private recipesService: RecipeService, private router: Router) {}
  
    ngOnInit(): void {
      this.mainMenu.defaultOptions = [
        {
          name: 'AGREGAR RECETA',
          icon: 'uil uil-plus-circle',
          router: ['/recipe/', 'new']
        }
      ]
      //this.recipesService.getAllRecipes$()
      //.subscribe(response => {
        //console.log(response)
      //})
      
      this.loadDataAll()
    }

    async loadDataAll(): Promise<any> {
      this.recipeList = await lastValueFrom(this.recipesService.getAllRecipes$())
    }
}


