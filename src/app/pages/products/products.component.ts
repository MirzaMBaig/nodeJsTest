import {Component, Injectable, OnInit} from "@angular/core";
import {ServerDataSource} from "ng2-smart-table";
import "style-loader!./product.scss";
import {Router} from "@angular/router";
import {HttpService} from "../http/HttpService";
import {ProductService} from "./products.service";
import Product = ProductModel.Product;


@Component({
  selector: 'product',
  templateUrl: './products.html',
})

@Injectable()
export class Products implements OnInit {

  private product: Product;

  settings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    actions: {
      add: true,
      edit: true
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },

    columns: {
      attributeName: {
        title: 'Name',
        type: 'string'
      },
      optionType: {
        title: 'Parent Category',
        type: 'string'
      },
      url: {
        title: 'URL',
        type: 'string'
      },
      parentCategory: {
        title: 'Parent Category',
        type: 'string'
      },
      manufacturer: {
        title: 'Manufacturer',
        type: 'string'
      },
      mrp: {
        title: 'MRP',
        type: 'string'
      },
      price: {
        title: 'Price',
        type: 'string'
      }
    },
    pager: {
      perPage: 10
    }
  };

  source: ServerDataSource;

  constructor(protected service: ProductService,
              private router: Router,
              protected http: HttpService) {

  }

  ngOnInit(): void {
    this.source = new ServerDataSource(this.http.getHttp(), {
      endPoint: this.http.remoteUrl().concat('admin/productOption/page'),
      dataKey: 'content',
      pagerPageKey: 'page',
      pagerLimitKey: 'size',
      totalKey: 'totalElements'
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onRowSelect(event): void {
    this.product = event.data;
  }

  editRow(event): void {
    this.product = event.data;
    this.router.navigate(['/pages/productDetail', {'id': this.product.id}]);
  }

  addNew(event): void {
    this.product = event.data;
    this.router.navigate(['/pages/productDetail']);
  }
}

