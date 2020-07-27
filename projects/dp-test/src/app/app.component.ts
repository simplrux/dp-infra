import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services/data.service';

class Column {
  field: string;
  header: string;
  disabled?: boolean;
  edit?: boolean;
  type?: string;
  inputConfig?: object;
  styles?: object;
}
interface Data {
  cols: Column[];
  values: any;
}
interface Config {
  editable: boolean;
  pagination: boolean;
  rows: number;
  editMode?: string;
  dataKey?: string;
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

    // you can to also use classes instead of interfaces - your choice.

    this.ds.getCarsMedium().then(cars => {
      this.data = {
        cols: [
          {
            field: 'vin', header: 'Vin', type: 'textInput', edit: true
          },
          { field: 'year', header: 'Year', type: 'numInput', edit: false, inputConfig: { currency: '$' }, styles: { color: 'blue' } },
          { field: 'brand', header: 'Brand', type: 'checkbox', edit: true },
          { field: 'color', header: 'Color', edit: true }
        ],
        values: cars
      };
    });

    this.config = {
      editable: false,
      pagination: true,
      rows: 20,
      editMode: 'row',
      dataKey: 'vin'
    };

  }

  onEditComplete($event) {
    // this.data.values[$event.index] = $event.rowData;
    // new data
    console.log('new data:', this.data.values);
  }

}
