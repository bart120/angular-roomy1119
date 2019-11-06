import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styles: []
})
export class RoomListComponent implements OnInit {

  rooms: Array<Room>;

  constructor(private serv: RoomService) {
    // console.log('const roomlist');
  }

  ngOnInit() {
    // console.log('ngOnInit roomlist');
    this.serv.getAll().subscribe(data => this.rooms = data);
  }

}
