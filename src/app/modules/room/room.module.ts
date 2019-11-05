import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';


@NgModule({
  declarations: [
    TopFiveComponent,
    RoomListComponent,
    RoomAddComponent,
    RoomDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    TopFiveComponent
  ]
})
export class RoomModule { }
