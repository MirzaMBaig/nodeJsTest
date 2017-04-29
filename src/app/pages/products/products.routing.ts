import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import {ProductOptionsTable} from "./products.component";
import {ProductOptionDetail} from "../productOptionDetail/productOptionDetail.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductOptionsTable,
  }
];

export const routing = RouterModule.forChild(routes);

