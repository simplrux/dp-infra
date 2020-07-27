import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dp-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

  inputConfig: any = {};
  @Input() rowData: any;
  @Input() col: any;
  @Output() inputBlur: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if (this.col.inputConfig) {
      this.inputConfig = this.col.inputConfig;
      console.log('number input config:', this.inputConfig);
    }
  }

}
