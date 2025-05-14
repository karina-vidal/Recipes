import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipes.model';
import { FavoritesService } from '@modules/favorites/services/favorites.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-card',
  standalone: false,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent implements OnInit{
  @Input() dataRecipes: Array<any> = []
  @Input() recipe: RecipeModel = { name: '', description: '', imagePath: '', userEmail: '' };
  @Input() id!: string | number | undefined

  isFavorite: boolean = false
  
  mainMenu: { options: Array<any> } = { options: [] }

  constructor(private favoritesService: FavoritesService){}
  
  ngOnInit(): void {
    const saved = localStorage.getItem(`favorite-${this.id}`);
    this.isFavorite = saved === 'true';

    this.mainMenu.options = [
      {
        name: 'vista', 
        icon: "uil uil-eye",
        router: ['/', 'recipe', 'edit'] 
      },
      {
        name: 'editar', 
        icon: "uil uil-pen",
        router: ['/', 'recipe', 'edit']
      },
      {
        name: 'eliminar',
        icon: "uil uil-trash-alt",
        click: this.deleteRecipe()
      }
    ]
  }

  addFavoritesRecipe(recipe: RecipeModel){
    this.favoritesService.addFavorites(recipe);
    this.id = recipe._id;
    this.isFavorite = !this.isFavorite
    localStorage.setItem(`favorite-${this.id}`, this.isFavorite.toString())
  }

  deleteRecipe(): void{
        Swal.fire({
          title: '¿Desea eliminar?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Proceed with saving changes
            title: 'Eliminado'
          }else{
            //router: 
          }
        });
      }

      //{{url}}/api/recipes/delete/64089c0a680f4d2b962b38ba?auth={{token}}
}
