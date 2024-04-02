import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class DBZComponent {

  @Input()
  public characterList: Character[] = []


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;

  onDeleteCharacter( id?: string ): void {
    if( !id) return;

    this.onDelete.emit( id )
  }
}
