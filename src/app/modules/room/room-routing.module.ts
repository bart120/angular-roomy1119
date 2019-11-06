import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const ROUTES: Routes = [
    { path: 'list', component: RoomListComponent },
    { path: 'add', component: RoomAddComponent },
    { path: 'detail/:id', component: RoomDetailComponent }
];

@NgModule({

    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class RoomRoutingModule { }