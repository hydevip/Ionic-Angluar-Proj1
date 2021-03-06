import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://germanculture.com.ua/wp-content/uploads/2017/05/schweineschnitzel-e1493678987461.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salat']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'http://www.umamiandus.com/wp-content/uploads/2018/02/spaghetti-cheese-zoom-out.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: String) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
