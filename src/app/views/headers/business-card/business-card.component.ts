import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {
  @Input()
  title;
  @Input()
  titleitalic;
  @Input()
  subtitle;
  @Input()
  address;
  @Input()
  phone;
  @Input()
  phone2;
  @Input()
  email;


  @Input()
  imageUrl;

  constructor() { }

  ngOnInit() {
  }

}
