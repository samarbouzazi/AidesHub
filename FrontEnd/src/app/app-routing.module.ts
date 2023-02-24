import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {path:"aides", loadChildren:()=>import('./composant/aides/aides.module').then(m=>m.AidesModule)},
  {path:"Stock", loadChildren:()=>import('./composant/stock/stock.module').then(m=>m.StockModule)},
 // {path:"etudiant", loadChildren:()=>import('./composant/etudiant/etudiant.module').then(m=>m.EtudiantModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
