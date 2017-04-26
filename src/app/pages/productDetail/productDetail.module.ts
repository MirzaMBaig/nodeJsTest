import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgaModule} from "../../theme/nga.module";
import {routing} from "./productDetail.routing";
import {ProductDetail} from "./productDetail.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProductDetailService} from "./producdDetail.service";
import {HttpService} from "../http/HttpService";
import {DatepickerModule} from "ng2-bootstrap";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ServerResponseBarService} from "../serverResponseBar/serverResponseBar.service";


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    NgbModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule.forRoot(),
    RouterModule,
    HttpModule
  ],
  declarations: [
    ProductDetail
  ],
  providers: [ProductDetailService, HttpService,ServerResponseBarService]

})

export class ProductDetailModule {
}
