import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

// לפי איזה פרמטרים בודקים אם שורה ניתנת לעריכה?
// האם תמיד ניתן לערוך שורה שלמה או עמודה שלמה?
// אם צריך לייצר אובייקט דינמי לאינפוט מספרי, מאיפה הפרמטרים יגיעו? על מה יתבססו?

@Component({
  selector: 'dp-table',
  templateUrl: './table.component.html',
  styleUrls: ['../infra.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @Input() data: any = {};
  @Input() config: any = {};
  clonedData = {};

  constructor() { }
  @Output() editComplete: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

  }

  onEditComplete($event) {
    console.log($event);
    // const index = $event.index;
    // const rowData = $event.rowData;
    // this.editComplete.emit({ index, rowData });
  }

  onRowEditInit(rowData) {
    this.clonedData[rowData[this.config.dataKey]] = { ...rowData };
  }

  onRowEditSave(rowData) {
  }

  onRowEditCancel(rowData, index: number) {
    this.data.values[index] = this.clonedData[rowData[this.config.dataKey]];
    delete this.clonedData[rowData[this.config.dataKey]];
  }
}
