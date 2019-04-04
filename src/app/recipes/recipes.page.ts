import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {


  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://germanculture.com.ua/wp-content/uploads/2017/05/schweineschnitzel-e1493678987461.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salat']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'http://www.umamiandus.com/wp-content/uploads/2018/02/spaghetti-cheese-zoom-out.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
