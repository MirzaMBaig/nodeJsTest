import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {LocalDataSource} from "ng2-smart-table";
import {CategoryXProduct} from "./categoryXProduct";
import {CategoryXProductModal} from "./categoryXProductModal/categoryXProduct-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../productDetail/Product";

@Component({
  selector: 'categoryXProducts',
  templateUrl: './categoryXProducts.html',
  entryComponents: [
  ]
})

export class CategoryXProducts implements OnInit {

  @Input("categoryDetailForm")
  public categoryDetailForm: FormGroup;

  @Input("categoryXProductSource")
  public categoryXProductSource: LocalDataSource;

  categoryInventoryTypes: Array<String> = ["No Value Selected", "Always Available", "Check Quantity", "Unavailable"];

  categoryXProductSettings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    actions: {
      add: true,
      edit: true,
      delete: true
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
      product: {
        title: 'Name',
        type: 'string',
      },
      displayOrder: {
        title: 'Display Order',
        type: 'number'
      },
    },
    pager: {
      perPage: 10
    }
  };

  constructor(private categoryXProductModal: NgbModal) {

  }

  ngOnInit(): void {
  }

  addCategoryXProduct(event): void {

    let popupModal = this.categoryXProductModal.open(CategoryXProductModal, {
      size: 'lg',
      backdrop: 'static'
    });

    popupModal.result.then((res) => {
      res?this.categoryXProductSource.prepend(res):"";
    }).catch(err => console.log(err));
  }
}
