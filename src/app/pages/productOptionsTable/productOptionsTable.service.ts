import {Injectable} from "@angular/core";
import {ProductOption} from "./ProductOption";
import {Http} from "@angular/http";


@Injectable()
export class ProductOptionsTableService {

  constructor(private http: Http) {
  }


  ProductOptionsTableData: ProductOption[] = [
    new ProductOption(1, 'Mark', 'Otto', true),
    new ProductOption(1, 'Mark1', 'Otto1', true)
  ];

  getProductOptions(): Promise<ProductOption[]> {

    return this.http.get('http://localwork.com:3200/product/option/all')
      .map(res => res.json())
      .toPromise();

  };

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  getData(): Promise<ProductOption[]> {
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    return new Promise((resolve, reject) => {
      console.log(this.ProductOptionsTableData)
      setTimeout(() => {
        resolve(this.ProductOptionsTableData);
      }, 2000);
    });
  }
}
