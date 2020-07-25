import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

// לפי איזה פרמטרים בודקים אם שורה ניתנת לעריכה?
// האם תמיד ניתן לערוך שורה שלמה או עמודה שלמה?
// אם צריך לייצר אובייקט דינמי לאינפוט מספרי, מאיפה הפרמטרים יגיעו? על מה יתבססו?

@Component({
  selector: 'dp-table',
  template: `
    <p-table dataKey="id" [paginator]="config.pagination"
    [rows]="config.rows"
    [columns]="data.cols" [value]="data.values">
      <ng-template pTemplate="header" let-columns>
        <tr>
          <th
            pReorderableColumn
            [pSortableColumn]="col.field"
            pResizableColumn
            *ngFor="let col of columns"
          >
            {{ col.header }}
          </th>
        </tr>
      </ng-template>


      <ng-template
        pTemplate="body"
        let-rowData
        let-columns="columns"
        let-index="rowIndex"
      >
        <tr [pReorderableRow]="index">
          <td *ngFor="let col of columns" [pEditableColumn]="rowData"
          [pEditableColumnField]="col.field">


              <p-cellEditor *ngIf="col.type === 'numInput' || col.type === 'textInput'" >
                <ng-template pTemplate="input">

                  <input type="number" *ngIf="col.type === 'numInput'"
                  (blur)="onColumnEditComplete($event, col, rowData, index)"
                  [(ngModel)]="rowData[col.field]" />

                  <input type="text" *ngIf="col.type === 'textInput'"
                  (blur)="onColumnEditComplete($event, col, rowData, index)"
                  [(ngModel)]="rowData[col.field]" />
                </ng-template>

                <ng-template pTemplate="output">
                    {{rowData[col.field]}}
                </ng-template>

              </p-cellEditor>

              <input type="checkbox" [disabled]="col.disabled" *ngIf="col.type === 'checkbox'"
                  (blur)="onColumnEditComplete($event, col, rowData, index)"
                  [(ngModel)]="rowData[col.field]" />


   <ng-container *ngIf="!col.type">
  {{rowData[col.field]}}
   </ng-container>

          </td>
        </tr>
      </ng-template>




    </p-table>
  `,
  styleUrls: ['./infra.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfraComponent implements OnInit {
  @Input() data: any = {};
  @Input() config: any = {};
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  onColumnEditComplete($event, col, rowData, index) {
    // this.data.values[index] = rowData;
    this.onEdit.emit({ index, rowData });
  }
}
