import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services/data.service';

interface Column {
  field: string; header: string; disabled?: boolean; edit?: boolean; type?: string; inputConfig?: object;
}
interface Data {
  cols: Column[];
  values: any;
}
interface Config {
  editable: boolean;
  pagination: boolean;
  rows: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ds: DataService) {
  }
  data: Data;
  config: Config;
  ngOnInit() {
    this.ds.getCarsMedium().then(cars => {
      this.data = {
        cols: [
          {
            field: 'vin', header: 'Vin', type: 'textInput', edit: true
          },
          { field: 'year', header: 'Year', type: 'numInput', edit: true, inputConfig: { currency: '$' } },
          { field: 'brand', header: 'Brand', type: 'checkbox', edit: true },
          { field: 'color', header: 'Color' }
        ],
        values: cars
      };
    });

    this.config = {
      editable: false,
      pagination: false,
      rows: 1,
    };
  }

  onEditComplete($event) {
    this.data.values[$event.index] = $event.rowData;
  }
}
