import { Routes, RouterModule }  from '@angular/router';

import { ProductOptions } from './productOptions.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductOptions
  }
];

export const routing = RouterModule.forChild(routes);
