import {Component, EventEmitter, Injectable, OnInit} from "@angular/core";
import {ProductOptionsTableService} from "./productOptionsTable.service";
import {LocalDataSource, ServerDataSource} from "ng2-smart-table";
import "style-loader!./productOptionsTable.scss";
import {Router} from "@angular/router";
import ProductOption = ProductOptionModel.ProductOption;
import {ServerPage} from "./serverPage";
import {Http} from "@angular/http";



@Component({
  selector: 'productOptionsTable',
  templateUrl: './productOptionsTable.html',
})

@Injectable()
export class ProductOptionsTable implements OnInit{

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
      //saveButtonContent: '<i class="ion-checkmark"></i>',
      //cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },

    columns: {

      // id: {
      //   title: 'ID',
      //   type: 'string',
      //   // valuePrepareFunction: (id) => {
      //   //   //return `<a href="/#/pages/productOptionDetail" [(ngModel)]="poDetail">${id}</a>`;
      //   //   return `<a href="" onclick="onIdClick()">${id}</a>`;
      //   // },
      // },
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


  constructor(protected service: ProductOptionsTableService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.service.getProductOptions("0","10").then((data) => {
      console.log(data);
      this.serverPage = data;
      this.source.load(this.serverPage.content);
      this.source.setPage(this.serverPage.number);
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
    this.poDetail = event.data;
  }

  editRow(event):void{
    this.poDetail = event.data;
    this.router.navigate(['/pages/productOptionDetail',{'id': this.poDetail.id}]);
  }

  addNew(event):void{
    this.poDetail = event.data;
    this.router.navigate(['/pages/productOptionDetail']);
  }
}

