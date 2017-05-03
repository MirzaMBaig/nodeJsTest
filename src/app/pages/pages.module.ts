import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {routing} from "./pages.routing";
import {NgaModule} from "../theme/nga.module";
import {Pages} from "./pages.component";
import {HttpModule} from "@angular/http";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {NgbDateISOParserFormatter} from "./util/ngb-date-parser-formatter";

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    HttpModule,
  ],
  declarations: [
    Pages
  ],
  providers: [{
    provide: NgbDateParserFormatter,
    useFactory: () => {
      return new NgbDateISOParserFormatter()
    }
  }]
})
export class PagesModule {
}
