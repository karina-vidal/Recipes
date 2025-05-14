import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipe',
    loadChildren: () => import(`@modules/recipe/recipe.module`).then(m=>m.RecipeModule)
  },
  {
    path: 'recipe/new',
    loadChildren: () => import(`@modules/new-recipe/new-recipe.module`).then(m=>m.NewRecipeModule)
  },
  {
    path: 'recipe/edit',
    loadChildren: () => import(`@modules/edit-recipe/edit-recipe.module`).then(m=>m.EditRecipeModule)
  },
  {
    path: 'ingredients',
    loadChildren: () => import(`@modules/ingredients/ingredients.module`).then(m=>m.IngredientsModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import(`@modules/favorites/favorites.module`).then(m => m.FavoritesModule)
  },
  {
    path: '**', //TODO: 404 cuando no existe la ruta
    redirectTo: '/recipe'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
