import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {ProductOptionTable} from "../productOptionsTable/ProductOptionTable.component";
import {ActivatedRoute} from "@angular/router";
import {ProductOptionDetailService} from "./productOptionDetail.service";
import {LocalDataSource} from "ng2-smart-table";
import ProductOption = ProductOptionModel.ProductOption;

@Component({
  selector: '',
  templateUrl: './productOptionDetail.html'
})

export class ProductOptionDetail implements OnInit, OnChanges, OnDestroy {

  id: number;
  private sub: any;
  poDetail: ProductOption;
  validateTypes: string[] = ["None", "No Value Selected", "Validate on Add Item", "Validate on Submit"];
  optionValueSource: LocalDataSource = new LocalDataSource();

  settings = {
    mode: 'inline', // inline|external|click-to-edit
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
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },

    columns: {
      attributeValue: {
        title: 'Attribute Value',
        type: 'string'
      },
      priceAdjustment: {
        title: 'Price Adjustment',
        type: 'number'
      },
      displayOrder: {
        title: 'Display Order',
        type: 'number'
      }
    }
  };

  constructor(protected service: ProductOptionDetailService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      // In a real app: dispatch action to load the details here.
      if (params['id'] != null) {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.service.getProductOption(this.id).then((data) => {
          this.poDetail = data;
          this.optionValueSource.load(this.poDetail.productOptionValues);
        });
      } else {
        this.poDetail = {
          attributeName: "New",
          displayOrder: null,
          errorCode: null,
          errorMessage: null,
          id: null,
          label: null,
          optionType: null,
          productOptionValues: [],
          required: false,
          useInSkuGeneration: false,
          validationStrategyType: null,
          validationString: null,
          validationType: "None"
        };
        this.optionValueSource.load(this.poDetail.productOptionValues);
      }
    });

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSubmitForm(): void {
    if (this.poDetail.id == null) {
      this.service.postProductOption(this.poDetail).then((data) => {
        this.poDetail = data;
        this.optionValueSource.load(this.poDetail.productOptionValues);
      });
    } else {
      this.service.putProductOption(this.poDetail).then((data) => {
        this.poDetail = data;
        this.optionValueSource.load(this.poDetail.productOptionValues);
      });
    }
  }
}