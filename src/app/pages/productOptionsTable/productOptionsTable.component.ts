import {Component, Injectable, OnInit} from "@angular/core";
import {ProductOptionsTableService} from "./productOptionsTable.service";
import {LocalDataSource, ServerDataSource} from "ng2-smart-table";
import "style-loader!./productOptionsTable.scss";
import {Router} from "@angular/router";
import {ServerPage} from "./serverPage";
import ProductOption = ProductOptionModel.ProductOption;
import {Http} from "@angular/http";


@Component({
  selector: 'productOptionsTable',
  templateUrl: './productOptionsTable.html',
})

@Injectable()
export class ProductOptionsTable implements OnInit {

  query: string = '';
  poDetail: ProductOption;
  serverPage: ServerPage;

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
        title: 'Attribute Name',
        type: 'string'
      },
      optionType: {
        title: 'Option Type',
        type: 'string'
      },
      required: {
        title: 'Required',
        type: 'boolean'
      }
    },
    pager: {
      perPage:1
    }
  };

  source: ServerDataSource;

  constructor(protected service: ProductOptionsTableService,
              private router: Router, private http: Http) {

  }

  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {
      endPoint: 'http://localhost:9090/ecom/admin/productOption/page',
      dataKey: 'content',
      pagerPageKey:'page',
      pagerLimitKey:'size',
      totalKey:'totalElements'});
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onRowSelect(event): void {
    this.poDetail = event.data;
  }

  editRow(event): void {
    this.poDetail = event.data;
    this.router.navigate(['/pages/productOptionDetail', {'id': this.poDetail.id}]);
  }

  addNew(event): void {
    this.poDetail = event.data;
    this.router.navigate(['/pages/productOptionDetail']);
  }
}

