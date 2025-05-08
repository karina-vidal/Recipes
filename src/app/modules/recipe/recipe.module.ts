import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule
  ]
})
export class RecipeModule { }
