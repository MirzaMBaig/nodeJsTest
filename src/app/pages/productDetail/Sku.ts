import ProductOptionValue = ProductOptionModel.ProductOptionValue;

export class Sku {
  id: number;

  activeEndDate: string;

  activeStartDate: string;

  availableFlag: boolean;

  description: string;

  containerShape: string;

  depth: number;

  dimensionUnitOfMeasure: string;

  girth: number;

  height: number;

  containerSize: string;

  width: number;

  discountableFlag: boolean;

  displayTemplate: string;

  externalId: string;

  fulfillmentType: string;

  inventoryType: string;

  isMachineSortable: boolean;

  longDescription: string;

  name: string;

  quantityAvailable: number;

  msrPrice: number;

  sellingPrice: number;

  cost: number;

  taxCode: string;

  taxableFlag: boolean;

  upc: string;

  urlKey: string;

  weight: number;

  weightUnitOfMeasure: string;

  currencyCode: string;

  productId: number;

  defaultSku: boolean;

  poductOptionsValues: Array<ProductOptionValue>;

  constructor(){
    this.defaultSku = true;
  }

}
