import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';

import {modelcategories,ModelCategory} from './model-data-model';
const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class AimodelService {

  constructor(private http: HttpClient) {}
  selectedAiCategory:ModelCategory;
  
  addModel(inputModel:Object,url:string):Observable<Object>
  {
    return this.http.post(url,inputModel,httpOptions).pipe(
    tap((hero:Object) =>console.log(JSON.stringify(hero))),
    catchError(err=>of(err)));
  }

  //fetch all models and save it into localstorage
  getModel(url:string):Observable<Object>
  {
    return this.http.get(url).pipe(
      map(data=>{return data['products'];}),
      tap((models:Object) =>localStorage.setItem('models',JSON.stringify(models))),
      catchError(err=>of(err)));
  }

  //get all info for model categories
  getCategories():Observable<ModelCategory[]>
  {
    return of(modelcategories);
  }
  

}
