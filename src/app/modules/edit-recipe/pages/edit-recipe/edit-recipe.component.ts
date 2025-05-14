import { Component, OnInit } from '@angular/core';

import { RecipeModel } from '@core/models/recipes.model';
import { EditRecipeService } from '@modules/edit-recipe/services/edit-recipe.service';
import swal from 'sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-recipe',
  standalone: false,
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit{
  newRecipe?: RecipeModel
  formEditRecipe: FormGroup = new FormGroup({})
  router: string = ''
  constructor(private editRecipeService: EditRecipeService){}

  ngOnInit(): void {
    this.formEditRecipe = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required
        ])
        //nameIngredient: new FormControl('',[
          //Validators.required
        //]),
        //number: new FormControl('',[
          //Validators.required
        //])
      }
    )
  }

  editRecipe(): void{
    swal.fire({
      title: 'Editar cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with saving changes
        title: 'Se guardaron los cambios'
        this.router = '/recipe'
      }
    });
  }
}
