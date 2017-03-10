import { APP_CONFIG_t } from './../../../app.config';
import { IEthnicConfig } from './../../../app.config.ethnic';
import { BusinessCardComponent } from './../../headers/business-card/business-card.component';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  //   title = this. AppConstants.TITLE;
  title;
  titleitalic;
  subtitle;
  address;
  phone;
  phone2;
  email;
  imageUrl;
  constructor( @Inject(APP_CONFIG_t) private config: IEthnicConfig) {
    this.title = config.title;
    this.titleitalic = config.titleitalic;
    this.subtitle = config.subtitle;
    this.address = config.address;
    this.phone = config.phone;
    this.phone2 = config.phone2;
    this.email = config.email;
    this.imageUrl = config.imageUrl;

  }

  ngOnInit() {
  }

}
