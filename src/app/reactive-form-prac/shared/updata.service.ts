import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User, users } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UpdataService {
   delayMs = 500;

  constructor() { }

  get(sequence: number) {
    return users.filter(user => user.sequence === sequence)[0]
  }

  getUser(sequence: number): Observable<User> {
    return of(users.filter(user => user.sequence === sequence)[0]).pipe(delay(this.delayMs)); // simulate latency with delay
  }

  save(user: User) { 
    const oldUser = users.find(u => u.sequence === user.sequence);
    const newUser = Object.assign(oldUser, user);
  }
}
