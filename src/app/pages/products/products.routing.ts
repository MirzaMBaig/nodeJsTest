import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import {Products} from "./products.component";

const routes: Routes = [
  {
    path: '',
    component: Products,
  }
];

export const routing = RouterModule.forChild(routes);

