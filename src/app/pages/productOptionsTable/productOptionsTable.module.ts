import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { HttpModule } from '@angular/http';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './productOptionsTable.routing';
import {ProductOptionsTable} from "./productOptionsTable.component";
import {ProductOptionsTableService} from "./productOptionsTable.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    HttpModule
  ],
  declarations: [
    ProductOptionsTable
  ],
  providers:[
    ProductOptionsTableService
  ]

})
export class ProductOptionsTableModule {}
