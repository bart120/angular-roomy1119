import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router, private snack: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // avant l'envoie
        // jwt

        return next.handle(req).pipe(
            catchError(err => {
                if (err.status == 401) {
                    this.snack.open('Accès interdit', 'OK', { duration: 3000 });
                    this.router.navigate(['/login']);
                }
                console.warn(err);
                return throwError(err.message);
            })
        );
    }
}
