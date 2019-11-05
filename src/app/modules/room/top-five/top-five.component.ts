import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styles: []
})
export class TopFiveComponent implements OnInit {

  title = 'TOP 5';

  rooms: Array<Room> = null; /*[
    { name: 'Calliope', image: 'Calliope.jpg' },
    { name: 'Thalie', image: 'Thalie.jpg' },
    { name: 'Pegase', image: 'Pegase.jpg' }
  ];*/
  // private serv: RoomService;

  constructor(private serv: RoomService) {
    // this.serv = serv;
  }

  ngOnInit() {
    this.serv.getTopFive().subscribe(
      data => {
        this.rooms = data;
      }, err => {
        console.warn(err);
      });

  }

}
