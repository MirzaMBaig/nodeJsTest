import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import {ProductOptionsTable} from "./productOptionsTable.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductOptionsTable,
  }
];

export const routing = RouterModule.forChild(routes);

