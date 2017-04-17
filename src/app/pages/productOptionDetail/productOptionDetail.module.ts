import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule as AngularFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {Ng2SmartTableModule} from "ng2-smart-table";


import {routing} from "./productOptionDetail.routing";


import {ProductOptionDetail} from "./productOptionDetail.component";
import {ProductOptionDetailService} from "./productOptionDetail.service";

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    ProductOptionDetail
  ],
  providers: [
    ProductOptionDetailService
  ]
})
export class ProductOptionDetailModule {
}
