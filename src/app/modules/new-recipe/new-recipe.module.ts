import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRecipeRoutingModule } from './new-recipe-routing.module';
import { NewRecipePageComponent } from './pages/new-recipe-page/new-recipe-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewRecipePageComponent
  ],
  imports: [
    CommonModule,
    NewRecipeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NewRecipeModule { }
