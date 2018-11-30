import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@myorg/ui/libs';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class MyOrgHeaderModule {}
