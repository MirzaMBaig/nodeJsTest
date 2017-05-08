import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {routing} from "./categoryDetail.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatepickerModule, ModalModule} from "ng2-bootstrap";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {CategoryDetail} from "./categoryDetail.component";
import {CategoryDetailService} from "./categoryDetail.service";
import {ServerResponseBarModule} from "../../serverResponseBar/serverResponseBar.module";
import {HttpService} from "../../http/HttpService";
import {NgaModule} from "../../../theme/nga.module";
import {CategoryGeneral} from "./categoryGeneral.component";
import {CategoryXProducts} from "./categoryXProducts.component";


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
    HttpModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    ServerResponseBarModule
  ],
  declarations: [
    CategoryDetail,
    CategoryGeneral,
    CategoryXProducts
  ],
  providers: [CategoryDetailService, HttpService
  ],
  entryComponents: [

  ]
})

export class CategoryDetailModule {
}
