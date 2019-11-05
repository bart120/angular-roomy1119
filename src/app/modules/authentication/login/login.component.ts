import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onBtnClick(mail: any): void {
    console.log('test', mail, this.passwd.nativeElement.value);
  }

  /*onKeyup(ev: KeyboardEvent): void {
    console.log('ev', ev.key);
    if (ev.key === 'Enter') {
      this.passwd.nativeElement.focus();
    }
  }*/

}
