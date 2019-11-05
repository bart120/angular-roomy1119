import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';

@NgModule({
    declarations: [TopFiveComponent],
    imports: [CommonModule, MaterialSharedModule],
    exports: [TopFiveComponent]
})
export class RoomSharedModule { }