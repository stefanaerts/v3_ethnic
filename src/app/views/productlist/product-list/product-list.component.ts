import { AppConstants } from './../../../app.constants';
import { BusinessCardComponent } from './../../headers/business-card/business-card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = AppConstants.TITLE;
titleitalic= AppConstants.TITLEITALIC;
  subtitle = AppConstants.SUBTITLE;
  imageUrl = AppConstants.IMAGEURL;
  constructor() { }

  ngOnInit() {
  }

}
