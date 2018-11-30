import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProgressFacade {
  private toggle = new BehaviorSubject<boolean>(false);
  toggle$ = this.toggle.asObservable();

  private summary = new BehaviorSubject<string>('');
  summary$ = this.summary.asObservable();

  constructor() { }

  start(summary: string = '') {
    this.toggle.next(true);
    this.summary.next(summary);
  }

  end() {
    this.toggle.next(false);
    this.summary.next('');
  }
}