import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { aides } from 'src/app/module/aides';
import { Stock } from 'src/app/module/stock';

@Injectable({
  providedIn: 'root'
})
export class ServiceAidesService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8083/Aides/Aides';
  Url1='http://localhost:8083/Stock/Stock';
  url4='http://localhost:8083/Aides/tri'
  Url3='http://localhost:8083/Aides/recherche';
 
  getaides(){
    return this.http.get<aides[]>(this.Url);
  }
  getStock(){
    return this.http.get<Stock[]>(this.Url1);
  }
  createaides(aides:aides){
    return this.http.post<aides>(this.Url,aides);
  }
  getaidesId(idAide:number){
    return this.http.get<aides>(this.Url+"/"+idAide);
  }
  updateaides(aides:aides){
    return this.http.put<aides>(this.Url,aides);
  }
  deleteaides(aides:aides){
    return this.http.delete<aides>(this.Url+"/"+aides.idAide);
  }
  public tri(){
    return this.http.get<aides[]>(this.url4)
  }
  public findAllBytype(type: String){
    return this.http.get<aides[]>(this.Url3+"/"+type);
  }
 
}