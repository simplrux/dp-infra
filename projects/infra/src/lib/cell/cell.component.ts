import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dp-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  @Input() rowData: any;
  @Input() col: any;
  @Input() index: any;
  @Output() editComplete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onColumnEditComplete(rowData, index) {
    this.editComplete.emit({ index, rowData });
  }

}
