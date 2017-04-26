import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ProductDetailService} from "./producdDetail.service";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../http/HttpService";
import {Product} from "./Product";
import {Sku} from "./Sku";
import {RequestMethod} from "@angular/http";



@Component({
  selector: 'productDetail',
  templateUrl: './productDetail.html'
})

export class ProductDetail implements OnInit, OnDestroy {

  productUrl = "product";
  productDetail: Product;

  inventoryTypes: Array<String> = ["No Value Selected", "Always Available", "Check Quantity", "Unavailable"];
  dimensionUnits: Array<String> = ["No Value Selected", "Centimeters", "Feet", "Inches", "Meters"];
  weightUnits: Array<String> = ["No Value Selected", "Kilograms", "Pounds"];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


  productForm: FormGroup;

  constructor(protected service: ProductDetailService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private httpService: HttpService) {

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
      productOptions: null,
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
      defaultSkuId: [this.productDetail.defaultSkuId],
      productCategories: [this.productDetail.productCategories],
      defaultSku: this.formBuilder.group({
        activeStartDate: [this.productDetail.defaultSku.activeStartDate],
        activeEndDate: [this.productDetail.defaultSku.activeEndDate],
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
      }),

    });
  }

  onSubmitProduct(): void {
    console.log("submit called");
    this.productDetail = this.productForm.value;
    console.log(this.productDetail);
    this.saveOrUpdateProduct(RequestMethod.Post);
  }

  private saveOrUpdateProduct(method: RequestMethod) {
    console.log("saveOrUpdateProduct");
    this.httpService
      .request(this.productUrl, this.productDetail, method)
      .then(data => {
        this.productDetail = data;
        this.createForm();
      })
      .catch(err => console.log(err));
  }
}
