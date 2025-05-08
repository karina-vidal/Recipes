import { IngredientModel } from "./ingredient.model";

export interface RecipeModel{
    _id: string | number;
    name: string;
    description: string;
    ingredients?: Array<IngredientModel>;
    imagePath: string;
    userEmail: string;
}