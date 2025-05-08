import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  standalone: false,
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})
export class RecipesPageComponent {
  @Input() dataRecipe: Array<any> = []
}
