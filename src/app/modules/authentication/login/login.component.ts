import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onBtnClick(mail: any): void {
    // console.log('test', mail, this.passwd.nativeElement.value);
    // appel serveur

    this.auth.logon(mail, this.passwd.nativeElement.value);
    this.router.navigate(['/home']);
  }

  /*onKeyup(ev: KeyboardEvent): void {
    console.log('ev', ev.key);
    if (ev.key === 'Enter') {
      this.passwd.nativeElement.focus();
    }
  }*/

}
