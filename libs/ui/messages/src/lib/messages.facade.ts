import { Injectable } from '@angular/core';
import { MessageService, Message } from 'primeng/api';

@Injectable()
export class MessagesFacade {

  constructor(
    private service: MessageService
  ) {}

  error(summary: string, detail: string = '') {
    this.service.clear();
    const message: Message = {
      severity: 'error',
      summary,
      detail
    };
    this.service.add(message);
  }

  clear() {
    this.service.clear();
  }

}
