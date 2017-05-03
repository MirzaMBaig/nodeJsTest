import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {routing} from "./products.routing";
import {Products} from "./products.component";
import {ProductService} from "./products.service";
import {RouterModule} from "@angular/router";
import {HttpService} from "../http/HttpService";
import {ServerResponseBarService} from "../serverResponseBar/serverResponseBar.service";
import {ServerResponseBarModule} from "../serverResponseBar/serverResponseBar.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    HttpModule,
    RouterModule,
    ServerResponseBarModule
  ],
  declarations: [
    Products
  ],
  providers: [
    ProductService,
    HttpService
  ]

})
export class ProductsModule {
}
