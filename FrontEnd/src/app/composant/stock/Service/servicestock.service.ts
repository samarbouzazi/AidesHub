import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from 'src/app/module/stock';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicestockService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8083/Stock/Stock';
  url4='http://localhost:8083/Stock/tristock'

  Url2='http://localhost:8083/Stock/rechercherbylieu';


  getStock(){
    return this.http.get<Stock[]>(this.Url);
  }
  creatStock(Stock:Stock){
    return this.http.post<Stock>(this.Url,Stock);
  }
  getStockId(idStock:number){
    return this.http.get<Stock>(this.Url+"/"+idStock);
  }
  updateStock(Stock:Stock){
    return this.http.put<Stock>(this.Url,Stock);
  }
  deleteStock(Stock:Stock){
    return this.http.delete<Stock>(this.Url+"/"+Stock.idStock);
  }
  public triStock(){
    return this.http.get<Stock[]>(this.url4)
  }

  //public retrieveStockBylieu(lieu:String){
   // return this.http.get<Stock[]>(this.Url1+"/"+lieu);
  //}

   public rechercherBylieu(lieu:String){
    return this.http.get<Stock[]>(this.Url2+"/"+lieu);
  }

}