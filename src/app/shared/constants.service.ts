import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class ConstantsService {

  constructor() { }

  private baseUrl = environment.apiUrl;

  getIngredientsUrl = this.baseUrl + '/shopping-list';
  postIngredientUrl = this.baseUrl + '/shopping-item';
}
