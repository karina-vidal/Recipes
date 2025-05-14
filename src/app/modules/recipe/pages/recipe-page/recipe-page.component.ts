import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from '@core/models/recipes.model';
import { FavoritesService } from '@modules/favorites/services/favorites.service';
import { RecipeService } from '@modules/recipe/services/recipe.service';
import { lastValueFrom } from 'rxjs';
import { EventEmitter } from 'stream';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-page',
  standalone: false,
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent implements OnInit{
    listResults: RecipeModel[] = []
    //@Output() callbackData: EventEmitter<any> = new EventEmitter()
    src: string = ''

    mainMenu: {    defaultOptions: Array<any>  } = { defaultOptions: [] }
    @Input() dataTracks: Array<any> = []
    recipeList: Array<RecipeModel> = []
    recipes: RecipeModel[] = []
    constructor(private recipesService: RecipeService, private router: Router, private favoritesService: FavoritesService) {}
  
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

    async deleteARecipe(): Promise<any> {
      this.recipes = await lastValueFrom(this.recipesService.deleteRecipe$())
    }

    addFavoritesRecipe(recipe: RecipeModel){
      this.favoritesService.addFavorites(recipe);
    }





    callSearch(term: string): void{   
      if(term.length > 3){
        console.log('---> ', term) 
      }
    }
    receiveData(event: string): void{
      console.log('mandar evento -> ', event)
      this.recipesService.searchRecipe$(event)
      .subscribe(({ data }) => {
        //console.log('...', res)
        this.listResults = data;
      })
    }

}


