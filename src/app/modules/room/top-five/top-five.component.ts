import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styles: []
})
export class TopFiveComponent implements OnInit {

  title = 'TOP 5';

  rooms: Array<any> = null; /*[
    { name: 'Calliope', image: 'Calliope.jpg' },
    { name: 'Thalie', image: 'Thalie.jpg' },
    { name: 'Pegase', image: 'Pegase.jpg' }
  ];*/
  // private serv: RoomService;

  constructor(private serv: RoomService) {
    // this.serv = serv;
  }

  ngOnInit() {
    this.rooms = this.serv.getTopFive();
  }

}
