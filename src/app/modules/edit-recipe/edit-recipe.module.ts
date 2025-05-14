import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRecipeRoutingModule } from './edit-recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditRecipeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditRecipeModule { }
