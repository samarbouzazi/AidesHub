import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/module/stock';
import { ServicestockService } from '../Service/servicestock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

  Stock :Stock=new Stock();
  constructor(private router:Router,private service:ServicestockService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let idStock=localStorage.getItem("idStock");
    this.service.getStockId(+idStock!)
    .subscribe(data=>{
      this.Stock=data;
    })
  }
  Actualizar(Stock:Stock){
    this.service.updateStock(Stock)
    .subscribe(data=>{
      this.Stock=data;
      alert("Mis à jour avec succés...!!!");
      this.router.navigate(["Stock/list"]);
    })
  }

}
