import {CategoryXProduct} from "./categoryDetail/categoryXProduct";
import {CategoryXRef} from "./categoryDetail/categoryXRef";

export class Category {

  id: number;

  activeEndDate: Date;

  activeStartDate: Date;

  archived: boolean;

  description: string;

  displayTemplate: string;

  externalId: string;

  fulfillmentType: string;

  inventoryType: string;

  longDescription: string;

  overrideGeneratedUrl: boolean;

  taxCode: string;

  url: string;

  urlKey: string;

  name: string;

  defaultParentCategory: Category;

  allProductXref: Array<CategoryXProduct>;

  allCategoryXref: Array<CategoryXRef>;
}
