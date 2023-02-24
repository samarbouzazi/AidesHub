import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/module/stock';
import { ServicestockService } from '../Service/servicestock.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {

  Stocks!: Stock[];
  idStock!:number;
  Stock :Stock=new Stock();
   title ='pagination';
   page: number=1;
   count: number=0;
 tableSize: number = 5; 
 tableSizes: any = [5, 10, 15, 20]; 
   constructor(private service: ServicestockService,private router: Router,private route: ActivatedRoute) { }
 
   ngOnInit(): void {
     this.service.getStock()
     .subscribe(data => {
       this.Stocks = data;
     });
   }
   onTableDataChange (Stock: any){
     this.page=Stock;
     this.service.getStock();
    }
    
   Editar(Stock:Stock):void{
     localStorage.setItem("idStock",Stock.idStock.toString());
     this.router.navigate(["Stock/edit"]);
   }
   
     Delete(Stock:Stock){
       this.service.deleteStock(Stock)
       .subscribe(data=>{
         this.Stocks=this.Stocks.filter(p=>p!==Stock);
         alert("Stock supprimé...");
       })
     }
     
     Nuevo(){
       this.router.navigate(["Stock/addStock"]);
     }
 
    
     
  tri(){
   this.service.triStock()
   .subscribe(data => {
     this.Stocks = data;
   });
   this.router.navigate(["Stock/list"]);
  }

  rechercher(lieu:String){
    this.service.rechercherBylieu(lieu).subscribe(
      (data: Stock[]) => {
        this.Stocks = data;
      },
      (error: any) => {
    })
  }

}
