import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RequestMethod, URLSearchParams} from "@angular/http";
import {NgbDateParserFormatter, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LocalDataSource} from "ng2-smart-table";
import {Category} from "./category";
import {HttpService} from "../../http/HttpService";
import {CategoryDetailService} from "./categoryDetail.service";

@Component({
  selector: 'categoryGeneral',
  templateUrl: './categoryGeneral.html',
  entryComponents: [

  ]
})

export class CategoryGeneral implements OnInit{

  @Input("categoryDetailForm")
  public categoryDetailForm: FormGroup;

  ngOnInit(): void {

  }
}
