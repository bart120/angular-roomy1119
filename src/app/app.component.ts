import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'roomy1119';
  user: User = null;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(u => {
      this.user = u;
      // console.log('MAJ');
    });
    // console.log('subscribe');
  }

  onLogout(): void {
    this.auth.logout();
    // this.user = null;

  }
}
