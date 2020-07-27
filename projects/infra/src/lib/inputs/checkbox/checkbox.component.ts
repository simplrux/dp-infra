import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'dp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() rowData: any;
  @Input() col: any;
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
