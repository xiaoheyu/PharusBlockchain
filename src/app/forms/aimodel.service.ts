import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class AimodelService {

  constructor(private http: HttpClient) {}
  
  addModel(inputModel:Object,url:string):Observable<Object>
  {
    console.log('add model!!');
    return this.http.post(url,JSON.stringify(inputModel),httpOptions).pipe(
    tap((hero:Object) =>console.log(JSON.stringify(hero))),
    catchError(err=>of(err)));
    // return this.http.get(url).pipe(
    //   tap((hero:Object) =>console.log(JSON.stringify(hero))),
    //   catchError(err=>of(err)));
  }

  //fetch all models and save it into localstorage
  getModel(url:string):Observable<Object>
  {
    return this.http.get(url).pipe(
      map(data=>{return data['products'];}),
      tap((models:Object) =>localStorage.setItem('models',JSON.stringify(models))),
      catchError(err=>of(err)));
  }

}
