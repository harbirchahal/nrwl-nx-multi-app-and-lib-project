import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { PrimengModule } from '@myorg/ui/libs';
import { MessagesFacade } from './messages.facade';
import { InlineMessageComponent } from './inline-message/inline-message.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [InlineMessageComponent],
  exports: [InlineMessageComponent],
  providers: [MessagesFacade, MessageService]
})
export class MyOrgMessagesModule {}
