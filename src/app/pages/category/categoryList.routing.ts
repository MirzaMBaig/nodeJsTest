import {RouterModule, Routes} from "@angular/router";
import {Tables} from "./tables.component";
import {CategoryList} from "./categoryList.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CategoryList,
  }
];

export const routing = RouterModule.forChild(routes);

