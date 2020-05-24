import { ConstantsService } from './../shared/constants.service';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from "./../shared/ingredient.model";
import { Subject } from "rxjs";
import { Injectable } from '@angular/core';
@Injectable()
export class ShoppingListService {
  ingridientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
  ];

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService
    ) {}

  getIngridients() {
    //return this.ingredients.slice();
    return this.http.get<Array<Ingredient>>(this.constantsService.getIngredientsUrl);
  }

  getIngridient(index: number) {
    return this.ingredients[index];
  }

  addIngridient(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);
    // this.ingridientsChanged.next(this.ingredients.slice());
    this.http.post<any>(this.constantsService.postIngredientUrl,ingredient).subscribe(data => {
      console.log(data.message);
      this.ingredients.push(data.item);
      this.ingridientsChanged.next(this.ingredients.slice());
    })
  }

  setIngridients(ingridients: Ingredient[]) {
    this.ingredients.push(...ingridients);
    this.ingridientsChanged.next(this.ingredients.slice());
  }

  updateIngridient(index: number, newIngridient: Ingredient) {
    // this.http.post<any>(this.constantsService.postIngredientUrl,newIngridient).subscribe(data => {
    //   console.log(data.message);
    //   this.ingredients[index] = data.item;
    //   this.ingridientsChanged.next(this.ingredients.slice());
    // })
  }

  deleteIngridient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingridientsChanged.next(this.ingredients.slice());
  }
}
