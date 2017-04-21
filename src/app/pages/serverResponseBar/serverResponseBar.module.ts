import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {ServerResponseBar} from "./serverResponseBar.component";
import {ServerResponseBarService} from "./serverResponseBar.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
  ],
  declarations: [ServerResponseBar],
  providers: [ServerResponseBarService]
})
export class ServerResponseBarModule {
}
