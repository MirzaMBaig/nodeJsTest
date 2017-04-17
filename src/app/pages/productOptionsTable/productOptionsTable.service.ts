import {Injectable} from "@angular/core";

import {Http} from "@angular/http";
import ProductOption = ProductOptionModel.ProductOption;


@Injectable()
export class ProductOptionsTableService {

  productOptionsTableData: ProductOption[];

  constructor(private http: Http) {
  }

  getProductOptions(): Promise<ProductOption[]> {
    return this.http.get('http://localhost:9090/ecom/product/option/all')
      .map(res => res.json())
      .toPromise();

  };

  getData(): Promise<ProductOption[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.productOptionsTableData);
      }, 2000);
    });
  }
}
