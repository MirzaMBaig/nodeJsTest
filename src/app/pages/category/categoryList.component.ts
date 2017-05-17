import {Component, Injectable, OnInit} from "@angular/core";
import {ServerDataSource} from "ng2-smart-table";
import "style-loader!./categoryList.scss";
import {Router} from "@angular/router";
import {HttpService} from "../http/HttpService";
import {Category} from "./categoryDetail/category";
import {CategoryListService} from "./categoryList.service";


@Component({
  selector: 'categoryDetails',
  templateUrl: './categoryList.html',
})

@Injectable()
export class CategoryList implements OnInit {

  categoryList: Category;

  categoryListSettings = {
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

  categoryListSource: ServerDataSource;

  constructor(protected service: CategoryListService,
              private router: Router, protected http: HttpService) {

  }

  ngOnInit(): void {
    this.categoryListSource = new ServerDataSource(this.http.getHttp(), {
      endPoint: this.http.remoteUrl().concat('admin/category/page'),
      dataKey: 'content',
      pagerPageKey: 'page',
      pagerLimitKey: 'size',
      totalKey: 'totalElements'
    });
  }

  onCategoryListDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCategoryListRowSelect(event): void {
    this.categoryList = event.data;
  }

  onCategoryListEditRow(event): void {
    this.categoryList = event.data;
    this.router.navigate(['/pages/categoryDetail', {'id': this.categoryList.id}]);
  }

  onCategoryListAddNew(event): void {
    this.categoryList = event.data;
    this.router.navigate(['/pages/categoryDetail']);
  }
}

