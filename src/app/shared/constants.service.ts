import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor() { }

  private baseUrl = 'http://localhost:3000';

  getIngredientsUrl = this.baseUrl + '/shopping-list';
  postIngredientUrl = this.baseUrl + '/shopping-item';
}
