import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    OrderListPipe,
    RecipesPageComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    HeaderUserComponent,
    OrderListPipe,
    RecipesPageComponent,
    RecipeCardComponent
  ]
})
export class SharedModule { }
