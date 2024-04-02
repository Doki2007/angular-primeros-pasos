import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();



  public character: Character = {
    name: '',
    power: 0
  };


  emitCharacter(): void {

    if ( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0 }
  }
}
