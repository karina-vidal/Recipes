import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecipePageComponent } from './pages/new-recipe-page/new-recipe-page.component';

const routes: Routes = [
    {
      path: '',
      component: NewRecipePageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRecipeRoutingModule { }
