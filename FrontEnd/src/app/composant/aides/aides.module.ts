import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AidesRoutingModule } from './aides-routing.module';
import { EditaidesComponent } from './editaides/editaides.component';
import { AddaidesComponent } from './addaides/addaides.component';
import { ListaidesComponent } from './listaides/listaides.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    EditaidesComponent,
    AddaidesComponent,
    ListaidesComponent
  ],
  imports: [
    CommonModule,
    AidesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class AidesModule { }
