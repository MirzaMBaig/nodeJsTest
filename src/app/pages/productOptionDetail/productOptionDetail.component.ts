import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {ProductOptionTable} from "../productOptionsTable/ProductOptionTable.component";
import {ActivatedRoute} from "@angular/router";
import {ProductOptionDetailService} from "./productOptionDetail.service";
import {LocalDataSource} from "ng2-smart-table";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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

  productOptionForm: FormGroup;

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

  constructor(protected service: ProductOptionDetailService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.poDetail = {
      attributeName: '',
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
      validationType: "None",
    };
    this.createForm();
  }

  createForm() {
    this.productOptionForm = this.formBuilder.group({
      attributeName: [this.poDetail.attributeName, Validators.required],
      displayOrder: [this.poDetail.displayOrder, Validators.required],
      errorCode: [this.poDetail.errorCode],
      errorMessage: [this.poDetail.errorMessage],
      id: [this.poDetail.id],
      label: [this.poDetail.label, Validators.required],
      optionType: [this.poDetail.optionType, Validators.required],
      productOptionValues: [this.poDetail.productOptionValues,Validators.minLength(1)],
      required: [this.poDetail.required],
      useInSkuGeneration: [this.poDetail.useInSkuGeneration],
      validationStrategyType: [this.poDetail.validationStrategyType],
      validationString: [this.poDetail.validationString],
      validationType: [this.poDetail.validationType, Validators.required],
    });
    this.optionValueSource.load(this.poDetail.productOptionValues);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      if (params['id'] != null) {
        this.id = +params['id'];
        this.service.getProductOption(this.id).then((data) => {
          this.poDetail = data;
          this.createForm();
        });
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
    this.poDetail = this.productOptionForm.value;
    console.log(this.poDetail);
    if (this.poDetail.id == null) {
      this.service.postProductOption(this.poDetail).then((data) => {
        this.poDetail = data;
      });
    } else {
      this.service.putProductOption(this.poDetail).then((data) => {
        this.poDetail = data;
      });
    }
    this.createForm();
  }
}
