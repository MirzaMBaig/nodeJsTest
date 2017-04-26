import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [CommonModule, NgaModule, routing, HttpModule],
  declarations: [Pages],
  providers: []
})
export class PagesModule {
}
