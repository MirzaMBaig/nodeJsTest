import {Component} from "@angular/core";
import {ProductOptionsTableService} from "./productOptionsTable.service";
import {LocalDataSource} from "ng2-smart-table";
import "style-loader!./productOptionsTable.scss";

@Component({
  selector: 'smart-tables',
  templateUrl: './productOptionsTable.html',
})


export class ProductOptionsTable {

  query: string = '';

  settings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    actions: {
      add: false,
      edit: true
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },

    columns: {

      id: {
        title: 'ID',
        type: 'html',
        valuePrepareFunction: (id) => {
          return `<a href="/#/pages/productOptionDetail">${id}</a>`;
        }
      },
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
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ProductOptionsTableService) {
    this.service.getProductOptions().then((data) => {
      console.log(data);
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

