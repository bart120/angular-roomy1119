import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styles: []
})
export class RoomListComponent implements OnInit {

  constructor() {
    console.log('const roomlist');
  }

  ngOnInit() {
    console.log('ngOnInit roomlist');
  }

}
