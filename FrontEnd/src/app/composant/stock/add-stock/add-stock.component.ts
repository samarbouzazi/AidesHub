import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'src/app/module/stock';
import { ServicestockService } from '../Service/servicestock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  Stock :Stock=new Stock();
  myForm!: FormGroup;
  constructor(private service: ServicestockService,private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      lieu: new FormControl('', [Validators.required, Validators.minLength(2)]),
      
   
  })
  }
  get lieu() {
    return this.myForm.controls["lieu"];
  }
  
  
onSubmit(){
    this.service.creatStock(this.Stock)
    .subscribe(data=>{
      alert("Ajouté Stock avec succès...!!!");
      this.router.navigate(["Stock/list"]);
    })
    this.myForm.reset();
  }

}



