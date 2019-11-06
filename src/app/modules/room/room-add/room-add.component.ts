import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styles: []
})
export class RoomAddComponent implements OnInit {

  formRoom: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.min(1)]),
    seatCount: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
    image: new FormControl('', [Validators.required])
  });

  pictures: Array<any> = [
    { id: 'Pegase.jpg', image: 'Image pegase' },
    { id: 'Calliope.jpg', image: 'Image Calliope' },
    { id: 'Thalie.jpg', image: 'Image Thalie' }
  ];

  constructor(private serv: RoomService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit() {
    // console.log(this.formRoom);

    this.serv.getRoomById(3314).subscribe(data => {

      // this.formRoom.setValue({ name: data.name, seatCount: data.seatCount, price: data.price, image: data.image });

      // const { id, ...rest } = data;
      // this.formRoom.setValue(rest);
    });
  }

  onSubmit(): void {
    if (this.formRoom.valid) {
      // console.log(this.formRoom);
      this.serv.insertRoom(this.formRoom.value as Room).subscribe(data => {
        this.snack.open(`La salle ${data.name} a été créée avec l'id ${data.id}`, 'OK', { duration: 3000 });
        this.router.navigate(['/rooms/detail/', data.id]);
      });
    }
  }

}
