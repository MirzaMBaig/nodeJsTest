import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {LocalDataSource} from "ng2-smart-table";
import {CategoryXProduct} from "./categoryXProduct";

@Component({
  selector: 'categoryXProducts',
  templateUrl: './categoryXProducts.html',
  entryComponents: []
})

export class CategoryXProducts implements OnInit {

  @Input("categoryDetailForm")
  public categoryDetailForm: FormGroup;

  categoryInventoryTypes: Array<String> = ["No Value Selected", "Always Available", "Check Quantity", "Unavailable"];

  private categoryXProduct: CategoryXProduct;

  categoryXProductSettings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    actions: {
      add: true,
      edit: false,
      delete: true
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },

    columns: {
      product: {
        title: 'Name',
        type: 'string'
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

  categoryXProductSource: LocalDataSource;

  ngOnInit(): void {

  }
}
