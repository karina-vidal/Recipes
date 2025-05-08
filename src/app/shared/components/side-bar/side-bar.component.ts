import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  mainMenu: {
    defaultOptions: Array<any>, logOut: Array<any>
  } = { defaultOptions: [], logOut: [] }

  customOptions: Array<any> = []

  constructor(){}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Recetas', 
        icon: "uil uil-receipt-alt",
        router: ['/']
      },
      {
        name: 'Ingredientes',
        icon: "uil uil-utensils",
        router: ['/', 'ingredients']
      },
      {
        name: 'Favoritos',
        icon: "uil uil-heart",
        router: ['/', 'favorites']
      }
    ]

    this.mainMenu.logOut = [
      {
        name: 'Cerrar Session',
        router: ['/', 'auth']
      }
    ]
  }

}
