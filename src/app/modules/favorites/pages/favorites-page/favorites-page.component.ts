import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipes.model';
import { FavoritesService } from '@modules/favorites/services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  standalone: false,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit{
  favorites: RecipeModel[] = []

  constructor(private favoritesService: FavoritesService){}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  
}
