import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name:  string = 'ironman';
  public age:   number =  45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    if (this.name == 'ironman') {
      this.name = 'jamir'
    }else if( this.name == 'jamir') {
      this.name = 'ironman';
    }
  }

  changeAge(): void {
    if (this.age == 45) {
      this.age = 23;
    }else if( this.age == 23) {
      this.age = 45;
    }
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age  = 45;
  }



}
