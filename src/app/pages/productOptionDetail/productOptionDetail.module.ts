import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {routing} from "./productOptionDetail.routing";
import {ProductOptionDetail} from "./productOptionDetail.component";
import {ProductOptionDetailService} from "./productOptionDetail.service";
import {HttpService} from "../http/HttpService";

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ProductOptionDetail
  ],
  providers: [
    ProductOptionDetailService,
    HttpService
  ]
})
export class ProductOptionDetailModule {
}
