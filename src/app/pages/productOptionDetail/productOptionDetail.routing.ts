import { Routes, RouterModule }  from '@angular/router';

import {ProductOptionDeail} from "./productOptionDetail.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductOptionDeail
  }
];

export const routing = RouterModule.forChild(routes);
