import {Injectable} from "@angular/core";

import {Http, URLSearchParams} from "@angular/http";
import ProductOption = ProductOptionModel.ProductOption;
import {ServerPage} from "./serverPage";


@Injectable()
export class ProductOptionsTableService {

  productOptionsTableData: ProductOption[];

  constructor(private http: Http) {
  }

  getProductOptions(start: string, length: string): Promise<ServerPage> {
    let params: URLSearchParams  = new URLSearchParams();
    params.set('start', start);
    params.set('length', length);

    return this.http.get('http://localhost:9090/ecom/admin/productOption/page',{search:params})
      .map(res => res.json())
      .toPromise();
  };

  getData(): Promise<ServerPage> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.productOptionsTableData);
      }, 2000);
    });
  }
}
