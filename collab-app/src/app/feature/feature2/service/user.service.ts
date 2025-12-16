import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = signal<User[]>([
    { id: 1, name: 'Giorgi', isActive: true },
    { id: 2, name: 'Nino', isActive: false }
  ]);

  users = this._users.asReadonly();

  toggleStatus(userId: number) {
    this._users.update(users =>
      users.map(user =>
        user.id === userId
          ? { ...user, isActive: !user.isActive }
          : user
      )
    );
  }
}
