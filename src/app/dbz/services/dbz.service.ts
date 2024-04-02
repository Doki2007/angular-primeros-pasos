import { Injectable } from '@angular/core';
import { v4 as uuid4} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id:   uuid4(),
    name: 'Krillin',
    power: 1000
  },{
    id:   uuid4(),
    name: 'Goku',
    power: 9500
  },{
    id:   uuid4(),
    name: 'Vegetta',
    power: 7500
  }]

  addCharacter( character: Character ): void {
    const newCharacter: Character = { id: uuid4(), ...character };
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter (Index: number ): void {
  //   this.characters.splice( Index, 1 )
  deleteCharacterById ( id:  string ) {
    this.characters = this.characters.filter( character => character.id !== id)
  }

}

