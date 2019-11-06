import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

    private isAuthenticated = false;
    constructor(private auth: AuthenticationService, private snack: MatSnackBar, private router: Router) {
        this.auth.user.subscribe(u => this.isAuthenticated = (u !== null));
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.isAuthenticated);
        if (this.isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['/login']);
            this.snack.open(`Veuillez vous connecter`, 'OK', { duration: 3000 });
            return false;
        }
    }
}
