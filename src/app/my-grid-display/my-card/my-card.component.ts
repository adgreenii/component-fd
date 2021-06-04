import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input()
  element: any;

  imagePath: string = "";
  onClickHref: string = "";

  constructor() { }

  ngOnInit(): void {
    this.imagePath = this.element.imagePath;
    this.onClickHref = this.element.onClickHref;
  }

}
