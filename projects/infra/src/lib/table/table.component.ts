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
  constructor() { }
  @Output() editComplete: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

  }

  onColumnEditComplete($event) {
    const index = $event.index;
    const rowData = $event.rowData;
    this.editComplete.emit({ index, rowData });
  }
}
