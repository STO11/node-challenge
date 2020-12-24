export default class RecipepuppyModel {
    keywords:string[];

    recipes:{ title: number, ingredients: string[], link:string, gif:string }[];

    constructor({ keywords, recipes }) {
      this.keywords = keywords;
      this.recipes = recipes;
    }
}
