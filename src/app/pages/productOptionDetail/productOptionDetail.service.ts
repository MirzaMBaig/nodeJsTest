import {Injectable} from "@angular/core";
import {Headers} from "@angular/http";
import ProductOption = ProductOptionModel.ProductOption;


@Injectable()
export class ProductOptionDetailService {

  productOption: ProductOption;
  private headers: Headers;

  constructor() {

    // this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Accept', 'application/json');
  }

  // getProductOption(id: number): Promise<ProductOption> {
  //   return this.http.get('http://localhost:9090/ecom/product/option/id/' + id)
  //     .map(res => res.json())
  //     .toPromise();
  // };
  //
  // postProductOption(poDetail: ProductOption): Promise<ProductOption> {
  //   return this.http.post('http://localhost:9090/ecom/product/option', JSON.stringify(poDetail), {headers: this.headers})
  //     .map(res => res.json())
  //     .toPromise();
  // };
  //
  // putProductOption(poDetail: ProductOption): Promise<ProductOption> {
  //   return this.http.put('http://localhost:9090/ecom/product/option', JSON.stringify(poDetail), {headers: this.headers})
  //     .map(res => res.json())
  //     .toPromise();
  // };
  //
  // getData(): Promise<ProductOption> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.productOption);
  //     }, 2000);
  //   });
  // }
}
