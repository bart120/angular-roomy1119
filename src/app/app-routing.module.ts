import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './modules/room/room-list/room-list.component';
import { RoomAddComponent } from './modules/room/room-add/room-add.component';
import { HomeComponent } from './modules/home/home/home.component';
import { NotfoundComponent } from './modules/home/notfound/notfound.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'rooms/list', component: RoomListComponent },
    { path: 'rooms/add', component: RoomAddComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }