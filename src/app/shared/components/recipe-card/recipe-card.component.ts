import { Component, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipes.model';

@Component({
  selector: 'app-recipe-card',
  standalone: false,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() dataRecipes: Array<any> = []
  @Input() recipe: RecipeModel = { _id: 0, name: '', description: '', imagePath: '', userEmail: '' };
  @Input() title: String = ''
  
}
