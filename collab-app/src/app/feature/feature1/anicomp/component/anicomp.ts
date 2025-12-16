import { Component } from '@angular/core';
import { MessageService } from '../service/message';
import { Message } from '../model/message.interface';

@Component({
  selector: 'app-anicomp',
  imports: [],
  templateUrl: './anicomp.html',
  styleUrl: './anicomp.scss',
})
export class Anicomp {
  message!: Message;

  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }
}
