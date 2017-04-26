import {Injectable} from "@angular/core";
import {HttpService} from "../http/HttpService";
import {RequestMethod, Http} from "@angular/http";
import {Product} from "./Product";


@Injectable()
export class ProductDetailService {


  productUrl = "product";

  constructor(protected httpService: HttpService, private _http: Http) {
  }

  saveOrUpdateProduct(http: HttpService, method: RequestMethod, product: Product  ) {
    console.log("saveOrUpdateProduct");
    //console.log(JSON.stringify(product));
    console.log("converted");
    this._http.post("http://localhost:9090/ecom/"+this.productUrl, "{}").mapTo(res=> console.log(res));

    // .then(data => {
    //   this.productDetail = data;
    //   this.createForm();
    // })
    // .catch(err => console.log(err));
  }

}
