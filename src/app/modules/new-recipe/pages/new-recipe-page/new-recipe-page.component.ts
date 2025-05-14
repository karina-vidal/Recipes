import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeModel } from '@core/models/recipes.model';
import { NewRecipeService } from '@modules/new-recipe/services/new-recipe.service';
import { title } from 'process';
import { lastValueFrom } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-recipe-page',
  standalone: false,
  templateUrl: './new-recipe-page.component.html',
  styleUrl: './new-recipe-page.component.css'
})
export class NewRecipePageComponent implements OnInit{
  newRecipe?: RecipeModel
  formAddRecipe: FormGroup = new FormGroup({})
  router:string = '';

  constructor(private newRecipesService: NewRecipeService){}

  ngOnInit(): void {
    this.formAddRecipe = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required
        ]),
        description: new FormControl('',[
          Validators.required
        ]),
        img: new FormControl('',[
          Validators.required
        ]),
        nameIngredient: new FormControl('',[
          Validators.required
        ]),
        number: new FormControl('',[
          Validators.required
        ])
      }
    )
    this.addNewRecipe()
  }

  //sendNewRecipe(): void{
    //const { name, description, img, nameIngredient, number } = this.formAddRecipe.value
    //this.newRecipesService.sendRecipe$(name, description, img, nameIngredient, number)
  //}

  sendNewRecipe(): void{
    swal.fire({
      title: '¿Guardar cambios?',
      //text: '¿deseas guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with saving changes
        title: 'Guardado'
        this.router = '/recipe'
      }
    });
  }
  async addNewRecipe(): Promise<any> {
    const { name, description, img, nameIngredient, number } = this.formAddRecipe.value
    this.newRecipe = await lastValueFrom(this.newRecipesService.addRecipe$(name, description, img, nameIngredient, number))
  }
}
