import { Injectable } from '@angular/core';
import { Message } from '../model/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getMessage(): Message {
    return {
      text: 'მოგესალმებათ ანის კომპონენტი'
    };
  }
}
