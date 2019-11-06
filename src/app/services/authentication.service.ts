import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    // private user: any;
    private subject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    get user(): Observable<User> {
        return this.subject.asObservable();
    }

    constructor() {
        const user: User = JSON.parse(sessionStorage.getItem('USER'));
        this.subject.next(user);
    }

    logon(mail, password): void {
        const user: User = { login: mail };
        sessionStorage.setItem('USER', JSON.stringify(user));
        this.subject.next(user);
    }

    logout(): void {
        sessionStorage.removeItem('USER');
        this.subject.next(null);
    }
}
