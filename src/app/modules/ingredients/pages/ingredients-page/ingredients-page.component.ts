import { Component, OnDestroy, OnInit } from '@angular/core';
import { IngredientsService } from '@modules/ingredients/services/ingredients.service';
import { response } from 'express';

@Component({
  selector: 'app-ingredients-page',
  standalone: false,
  templateUrl: './ingredients-page.component.html',
  styleUrl: './ingredients-page.component.css'
})
export class IngredientsPageComponent implements OnInit, OnDestroy{

  constructor(private ingredientService: IngredientsService) {}

  ngOnInit(): void {
    //this.ingredientService.getAllRecipes$().subscribe(response => {
      //console.log(response)
    //})
  }

  ngOnDestroy(): void {
    //
  }
}
