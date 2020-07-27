import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellComponent } from './cell/cell.component';
import { NumberComponent } from './inputs/number/number.component';
import { CheckboxComponent } from './inputs/checkbox/checkbox.component';
import { TextComponent } from './inputs/text/text.component';

@NgModule({
  declarations: [TableComponent, CellComponent, NumberComponent, CheckboxComponent, TextComponent],
  imports: [
    TableModule,
    CommonModule,
    FormsModule
  ],
  exports: [TableComponent]
})
export class InfraModule { }
