import {Component, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ServerDataSource} from "ng2-smart-table";
import {Router} from "@angular/router";
import {CategoryDetailService} from "../categoryDetail.service";
import {Product} from "../../../productDetail/Product";
import {HttpService} from "../../../http/HttpService";

@Component({
  selector: 'add-categoryXProduct-modal',
  styleUrls: ['./default-modal.component.scss'],
  templateUrl: './categoryXProduct-modal.component.html',
  providers:[CategoryDetailService],
})

export class CategoryXProductModal implements OnInit {


  categoryXProductModalSetings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    actions: {
      add: false,
      edit: false,
      delete:false,
      actions:false,
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
      name: {
        title: 'Name',
        type: 'string'
      },
      url: {
        title: 'URL',
        type: 'string'
      }
    },
    pager: {
      perPage: 10
    }
  };

  categoryXProductSource: ServerDataSource;
  product: Product;

  constructor(protected service: CategoryDetailService,
              private router: Router, protected http: HttpService,
              private activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
    this.categoryXProductSource = new ServerDataSource(this.http.getHttp(), {
      endPoint: this.http.remoteUrl().concat('product/all'),
      //dataKey: 'content',
      pagerPageKey: 'page',
      pagerLimitKey: 'size',
      //totalKey: 'totalElements'
    });
  }

  onCategoryXProductRowSelect(event): void {
    console.log(event.data);
    this.product = event.data;
  }

  closeCategoryXProductModal() {
    this.activeModal.close(this.product);
  }
}
