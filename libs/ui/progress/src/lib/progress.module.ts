import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@myorg/ui/libs';
import { ProgressFacade } from './progress.facade';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
  providers: [ProgressFacade]
})
export class MyOrgProgressModule {}
