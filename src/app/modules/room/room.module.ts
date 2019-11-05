import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { RoomRoutingModule } from './room-routing.module';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomAddComponent,
    RoomDetailComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MaterialSharedModule
  ]
})
export class RoomModule { }
