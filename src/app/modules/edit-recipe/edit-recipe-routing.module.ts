import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: EditRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRecipeRoutingModule { }
