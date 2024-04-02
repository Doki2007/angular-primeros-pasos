import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AppComponent],
  template: `
    <h3> Counter: {{ counter }} </h3>

    <button (click)="increaseBy( 1 )">+1</button>
    <button (click)="resetButton()">Reset</button>
    <button (click)="increaseBy( 0 )">-1</button>`
})

export class CounterComponent {
  public counter: number = 10;


  increaseBy( value: number ):void {
    if ( value === 1 ) {
      this.counter += 1;
    }else if ( value === 0 ){
      this.counter -= 1;
    }
  }

  resetButton(): void {
    this.counter = 10;
  }
}
