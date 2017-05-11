import {Component, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ServerDataSource} from "ng2-smart-table";
import {Router} from "@angular/router";
import {CategoryDetailService} from "../categoryDetail.service";
import {HttpService} from "../../../http/HttpService";
import {CategoryXRefModel} from "../categoryXRef";

@Component({
  selector: 'add-categoryXRef-modal',
  styleUrls: ['./default-modal.component.scss'],
  templateUrl: './categoryXRef-modal.component.html',
  providers: [CategoryDetailService],
})

export class CategoryXRefModal implements OnInit {


  categoryXRefModalSettings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    actions: {
      add: false,
      edit: false,
      delete: false,
      actions: false,
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
      }
    },
    pager: {
      perPage: 10
    }
  };

  categoryXRefSource: ServerDataSource;
  categoryXRef: CategoryXRefModel;
  displayOrderCXR: number;

  constructor(protected service: CategoryDetailService,
              private router: Router, protected http: HttpService,
              private activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
    this.categoryXRefSource = new ServerDataSource(this.http.getHttp(), {
      endPoint: this.http.remoteUrl().concat('admin/category/page'),
      dataKey: 'content',
      pagerPageKey: 'page',
      pagerLimitKey: 'size',
      totalKey: 'totalElements'
    });
  }

  onCategoryXRefRowSelect(event): void {
    let category = event.data;
    this.categoryXRef = {
      id: null,
      defaultReference: false,
      displayOrder: this.displayOrderCXR,
      category: null,
      subCategory: category.name,
      categoryId: null,
      subCategoryId: category.id

    }
  }

  closeCategoryXRefModal() {
    this.categoryXRef?this.categoryXRef.displayOrder = this.displayOrderCXR:"";
    this.activeModal.close(this.categoryXRef);
  }

  dismissCategoryXRefModal() {
    this.activeModal.dismiss("No Child category added to category");
  }
}
