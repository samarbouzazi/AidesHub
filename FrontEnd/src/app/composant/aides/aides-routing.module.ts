import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddaidesComponent } from './addaides/addaides.component';
import { EditaidesComponent } from './editaides/editaides.component';
import { ListaidesComponent } from './listaides/listaides.component';

const routes: Routes = [
  {path:'list',component:ListaidesComponent},
  {path:'addaide',component:AddaidesComponent},
  {path:'edit',component:EditaidesComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AidesRoutingModule { }
