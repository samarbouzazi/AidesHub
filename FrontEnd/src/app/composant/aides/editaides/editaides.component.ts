import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { aides } from 'src/app/module/aides';
import { ServiceAidesService } from '../Service/service-aides.service';

@Component({
  selector: 'app-editaides',
  templateUrl: './editaides.component.html',
  styleUrls: ['./editaides.component.css']
})
export class EditaidesComponent implements OnInit {

  aides :aides=new aides();
  myForm!: FormGroup;
  form!: FormGroup;
  option:string="Customer";
  constructor(private router:Router,private service:ServiceAidesService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let idAide=localStorage.getItem("idAide");
    this.service.getaidesId(+idAide!)
    .subscribe(data=>{
      this.aides=data;
    })
  }
  Actualizar(aides:aides){
    this.service.updateaides(aides)
    .subscribe(data=>{
      this.aides=data;
      alert("Mis à jour avec succés...!!!");
      this.router.navigate(["aides/list"]);
    })
  }


}

