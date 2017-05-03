import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ProductDetailService} from "./producdDetail.service";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../http/HttpService";
import {Product} from "./Product";
import {Sku} from "./Sku";
import {RequestMethod} from "@angular/http";
import {NgbDateParserFormatter, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LocalDataSource} from "ng2-smart-table";
import {ProductOptionModal} from "./poModal/product-options-modal.component";
import ProductOption = ProductOptionModel.ProductOption;


@Component({
  selector: 'productDetail',
  templateUrl: './productDetail.html',
  entryComponents: [
    ProductOptionModal
  ]
})

export class ProductDetail implements OnInit, OnDestroy {

  productUrl = "product";
  productDetail: Product;
  sub: any;
  id: number;
  selectedSku: Sku;


  inventoryTypes: Array<String> = ["No Value Selected", "Always Available", "Check Quantity", "Unavailable"];
  dimensionUnits: Array<String> = ["No Value Selected", "Centimeters", "Feet", "Inches", "Meters"];
  weightUnits: Array<String> = ["No Value Selected", "Kilograms", "Pounds"];

  productOptionsSource: LocalDataSource = new LocalDataSource();
  skuSource: LocalDataSource = new LocalDataSource();

  settings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    noDataMessage: "no product options for this product, please add",
    actions: {
      add: true,
      delete: false,
      edit: false
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },

    columns: {
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
    },
    pager: {
      perPage: 10
    }
  };

  skuSettings = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    noDataMessage: "no skus for this product, please add",
    actions: {
      delete: false,
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
    },

    columns: {
      name: {
        title: 'Name',
        type: 'string'
      },
      cost: {
        title: 'Cost',
        type: 'number'
      },
      sellingPrice: {
        title: 'Price',
        type: 'number'
      },
    },
    pager: {
      perPage: 10
    }
  };


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      if (params['id'] != null) {
        this.id = +params['id'];
        this.getProductForId(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  productForm: FormGroup;

  constructor(protected service: ProductDetailService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private httpService: HttpService,
              public dateFormatter: NgbDateParserFormatter,
              private poModal: NgbModal) {


    this.productDetail = {
      name: null,
      description: null,
      manufacture: null,
      model: null,
      overrideGeneratedUrl: null,
      urlKey: null,
      url: null,
      defaultCategoryId: null,
      defaultSkuId: null,
      productOptions: [],
      productCategories: null,
      skus: null,
      archived: null,
      canSellWithoutOptions: false,
      isFeaturedProduct: false,
      id: null,
      defaultSku: new Sku(),
    };
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      name: [this.productDetail.name, Validators.required],
      id: [this.productDetail.id],
      description: [this.productDetail.description, Validators.required],
      manufacture: [this.productDetail.manufacture],
      productOptions: [this.productDetail.productOptions],
      archived: [this.productDetail.archived],
      isFeaturedProduct: [this.productDetail.isFeaturedProduct],
      overrideGeneratedUrl: [this.productDetail.overrideGeneratedUrl],
      defaultCategoryId: [this.productDetail.defaultCategoryId, Validators.required],
      productOptionsSource: [this.productDetail.productOptions],
      productCategories: [this.productDetail.productCategories],
      defaultSku: this.formBuilder.group({
        defaultSkuName: [this.productDetail.defaultSku.name],
        activeStartDate: [this.dateFormatter.parse(this.productDetail.defaultSku.activeStartDate)],
        activeEndDate: [this.dateFormatter.parse(this.productDetail.defaultSku.activeEndDate)],
        taxableFlag: [this.productDetail.defaultSku.taxableFlag],
        msrPrice: [this.productDetail.defaultSku.msrPrice],
        sellingPrice: [this.productDetail.defaultSku.sellingPrice, Validators.required],
        cost: [this.productDetail.defaultSku.cost, Validators.required],
        discountableFlag: [this.productDetail.defaultSku.discountableFlag],
        inventoryType: [this.productDetail.defaultSku.inventoryType],
        quantityAvailable: [this.productDetail.defaultSku.quantityAvailable],
        depth: [this.productDetail.defaultSku.depth],
        dimensionUnitOfMeasure: [this.productDetail.defaultSku.dimensionUnitOfMeasure],
        girth: [this.productDetail.defaultSku.girth],
        height: [this.productDetail.defaultSku.height],
        width: [this.productDetail.defaultSku.width],
        isMachineSortable: [this.productDetail.defaultSku.isMachineSortable],
        fulfillmentType: [this.productDetail.defaultSku.fulfillmentType],
        weight: [this.productDetail.defaultSku.weight],
        weightUnitOfMeasure: [this.productDetail.defaultSku.weightUnitOfMeasure],
        skus: this.formBuilder.array([]),
      }),

    });
    this.productOptionsSource.load(this.productDetail.productOptions);
  }

  onSubmitProduct(): void {

    this.productDetail = this.productForm.value;
    this.productDetail.defaultSku.activeStartDate = this.dateFormatter.format(this.productForm.controls.defaultSku.controls["activeStartDate"].value);
    this.productDetail.defaultSku.activeEndDate = this.dateFormatter.format(this.productForm.controls.defaultSku.controls["activeEndDate"].value);

    this.saveOrUpdateProduct(RequestMethod.Post);

  }

  private saveOrUpdateProduct(method: RequestMethod) {

    this.httpService
      .request(this.productUrl, this.productDetail, method)
      .then(data => {
        this.productDetail = <Product>data;
        this.createForm();
      })
      .catch(err => console.log(err));
  }

  addNewProductOption(event): void {

    let poModel = this.poModal.open(ProductOptionModal, {
      size: 'lg',
      backdrop: 'static'
    });

    poModel.result.then((res) => {
      this.productOptionsSource.prepend(res)
    }).catch(err => console.log(err));
  }

  addNewSku(event): void {
    console.log("adding sku");
  }

  addNewSku(event): void {
    console.log("adding sku");
  }

  private getProductForId(id) {
    this.httpService
      .get('product/id/' + id)
      .then(data => {
        this.productDetail = <Product>data;
        this.createForm();
      })
      .catch(err => console.log(err));
  }

}
