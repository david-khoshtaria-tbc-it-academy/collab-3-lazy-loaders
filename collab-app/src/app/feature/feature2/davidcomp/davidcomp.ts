import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-davidcomp',
  imports: [CommonModule],
  templateUrl: './davidcomp.html',
  styleUrl: './davidcomp.scss',
})
export class Davidcomp {
  
  users :any;
  
  constructor(private userService: UserService) {
    this.users = userService.users
  }
  
  toggle(userId: number) {
    this.userService.toggleStatus(userId);
  }
}
