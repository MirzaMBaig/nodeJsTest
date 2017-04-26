import ProductOption = ProductOptionModel.ProductOption;
import Category = CategoryModel.Category;
import {Sku} from "./Sku";

export class Product {

  id: number;

  name: string;

  archived: boolean;

  canSellWithoutOptions: boolean;

  description: string;

  isFeaturedProduct: boolean;

  manufacture: string;

  model: string;

  overrideGeneratedUrl: boolean;

  url: string;

  urlKey: string;

  defaultCategoryId: number;

  defaultSkuId: number;

  productOptions: Array<ProductOption>;

  productCategories: Array<Category>;

  skus: Array<Sku>;

  defaultSku: Sku;

}

