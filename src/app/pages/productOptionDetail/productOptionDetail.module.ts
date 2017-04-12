import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { BasicForm } from './basicForm/basicForm.component';
import { HorizontalForm } from './horizontalForm/horizontalForm.component';


import { routing }       from './productOptionDetail.routing';


import {ProductOptionDeail} from "./productOptionDetail.component";

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ProductOptionDeail,
    BasicForm,
    HorizontalForm
  ]
})
export class ProductOptionDetailModule {
}
