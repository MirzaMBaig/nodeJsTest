import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {LocalDataSource} from "ng2-smart-table";
import {CategoryXProduct} from "./categoryXProduct";

@Component({
  selector: 'categoryXRef',
  templateUrl: './categoryXRef.html',
  entryComponents: []
})

export class CategoryXRef implements OnInit {

  @Input("categoryDetailForm")
  public categoryDetailForm: FormGroup;

  @Input("categoryXRefSource")
  public categoryXRefSource: LocalDataSource;

  private categoryXRef: CategoryXRef;

  categoryXRefSettings = {
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
      subCategory: {
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



  ngOnInit(): void {
  }
}
