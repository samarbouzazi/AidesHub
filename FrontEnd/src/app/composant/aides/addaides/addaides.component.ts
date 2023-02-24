import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { aides } from 'src/app/module/aides';
import { Stock } from 'src/app/module/stock';
import { ServiceAidesService } from '../Service/service-aides.service';

@Component({
  selector: 'app-addaides',
  templateUrl: './addaides.component.html',
  styleUrls: ['./addaides.component.css']
})
export class AddaidesComponent implements OnInit {
  aides:aides=new aides();
  stock:Stock=new Stock();
  Stocks!: Stock[];
  myForm!: FormGroup;
  form!: FormGroup;
  constructor(private router:Router, private service:ServiceAidesService) { }

  ngOnInit(): void {
    this.service.getStock()
    .subscribe(data => {
      this.Stocks = data;
    })
    this.myForm = new FormGroup({
      Nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      NonResponsable: new FormControl('', [Validators.required, Validators.minLength(2)]),
      AdresseDonneur:new FormControl('',[Validators.required, Validators.minLength(3)]),
      Quantite:new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      type:new FormControl('',),
      date:new FormControl('',),
      idStock:new FormControl('',)
  })
  }
  get Nom() {
    return this.myForm.controls["Nom"];
  }
  
  get NonResponsable() {
    return this.myForm.controls["NonResponsable"];
  }
  get AdresseDonneur() {
    return this.myForm.controls["AdresseDonneur"];
  }
  
  get Quantite() {
    return this.myForm.controls["Quantite"];
  }
  get type() {
    return this.myForm.controls["type"];
  }

  get date() {
    return this.myForm.controls["date"];
  }
  get idStock() {
    return this.myForm.controls["idStock"];
  }


  onSubmit(){
    this.service.createaides(this.aides)
    .subscribe(data=>{
      alert("Ajouté aides avec succès...!!!");
      this.router.navigate(["aides/list"]);
    })
    this.myForm.reset();
  }


}
