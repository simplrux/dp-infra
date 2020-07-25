import { NgModule } from '@angular/core';
import { InfraComponent } from './infra.component';
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DpInputNumberComponent } from './dp-input-number/dp-input-number/dp-input-number.component';

@NgModule({
  declarations: [InfraComponent, DpInputNumberComponent],
  imports: [
    TableModule,
    CommonModule,
    FormsModule
  ],
  exports: [InfraComponent]
})
export class InfraModule { }
