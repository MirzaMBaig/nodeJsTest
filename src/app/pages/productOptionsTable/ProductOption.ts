declare module ProductOptionModel {

  export class ProductOptionValue {
    attributeValue: string;
    displayOrder: number;
    id: number;
    priceAdjustment: number;
  }

  export class ProductOption {
    attributeName: string;
    displayOrder: number;
    errorCode: string;
    errorMessage: string;
    id: number;
    label: string;
    optionType: string;
    productOptionValues: ProductOptionValue[];
    required: boolean;
    useInSkuGeneration: boolean;
    validationStrategyType: string;
    validationString: string;
    validationType: string;
  }

}
