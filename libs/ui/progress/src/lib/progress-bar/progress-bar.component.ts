import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProgressFacade } from '../progress.facade';

@Component({
  selector: 'myorg-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  private barColors = ["primary", "accent", "warn"];
  private colorIndex = 0;
  private intervalEmitter: Subscription;
  toggle$: Observable<boolean>;

  get color() {
    return this.barColors[this.colorIndex];
  }

  constructor(
    public facade: ProgressFacade
  ) {
    this.toggle$ = this.facade.toggle$.pipe(
      tap(toggle => {
        if (toggle) {
          this.intervalEmitter = interval(250).subscribe(() => {
            this.colorIndex += 1;
            if (this.colorIndex > 2) {
              this.colorIndex = 0;
            }
          });
        }
        else {
          if (this.intervalEmitter) {
            this.intervalEmitter.unsubscribe();
            this.intervalEmitter = null;
          }
        }
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.intervalEmitter) {
      this.intervalEmitter.unsubscribe();
    }
  }

}
