import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RoomService {

    constructor(private http: HttpClient) { }

    getTopFive(update: boolean = false): Observable<Array<Room>> {
        /*return [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' },
            { name: 'Pegase', image: 'Pegase.jpg' }
        ];*/
        if (update) {
            return timer(0, 5000).pipe(
                mergeMap(() => this.http.get<Array<Room>>(environment.url_rooms).pipe(
                    map(data => data.slice(0, 5))
                ))
            );
            // return this.http.get<Array<Room>>(environment.url_rooms).pipe(
            //     mergeMap(() => timer(0, 5000))); ==> ERREUR

        } else {
            return this.http.get<Array<Room>>(environment.url_rooms).pipe(
                map(data => data.slice(0, 5))
            );
        }

        // return this.http.get<Array<Room>>(environment.url_rooms);

        // console.log('fin gettopfive');
        // return null;
    }

    getAll(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(environment.url_rooms).pipe(
            map(data => data.sort((a, b) => a.name < b.name ? 0 : 1))
        );
    }

    getRoomById(id: number): Observable<Room> {
        return this.http.get<Room>(`${environment.url_rooms}/${id}`);
    }
}
