import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { aides } from 'src/app/module/aides';
import { Stock } from 'src/app/module/stock';
import { ServiceAidesService } from '../Service/service-aides.service';

@Component({
  selector: 'app-listaides',
  templateUrl: './listaides.component.html',
  styleUrls: ['./listaides.component.css']
})
export class ListaidesComponent implements OnInit {
 aidess!: aides[];
 idAide!:number;
 aides :aides=new aides();
 Stocks!:Stock[];
  title ='pagination';
  page: number=1;
  count: number=0;
tableSize: number = 5; 
tableSizes: any = [5, 10, 15, 20]; 
  constructor(private service: ServiceAidesService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getaides()
    .subscribe(data => {
      this.aidess = data;
    });
  }
  onTableDataChange (etudiant: any){
    this.page=etudiant;
    this.service.getaides();
   }
   
  Editar(aides:aides):void{
    localStorage.setItem("idAide",aides.idAide.toString());
    this.router.navigate(["aides/edit"]);
  }
  
    Delete(aides:aides){
      this.service.deleteaides(aides)
      .subscribe(data=>{
        this.aidess=this.aidess.filter(p=>p!==aides);
        alert("aide supprimé...");
      })
    }
    Listar(){
      this.router.navigate(["aides/list"]);
    }
    Nuevo(){
      this.router.navigate(["aides/addaide"]);
    }

   
    
 tri(){
  this.service.tri()
  .subscribe(data => {
    this.aidess = data;
  });
  this.router.navigate(["aides/list"]);
 }

 rechercher(type:String){
  this.service.findAllBytype(type)
  .subscribe(data =>{
    this.aidess=data ;
  },error=>{
    console.log(error);
  })
}
  

}
