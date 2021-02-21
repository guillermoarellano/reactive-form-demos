import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DarkElf } from '../../shared/backend/dark-elf';
import { ForestGnome } from '../../shared/backend/forest-gnome';
import { HighElf } from '../../shared/backend/high-elf';
import { RockGnome } from '../../shared/backend/rock-gnome';
import { Wizard } from '../../shared/backend/wizard';
import { WoodElf } from '../../shared/backend/wood-elf';
import { CharacterClass } from '../../shared/character-class';
import { Race } from '../../shared/race';
import { RaceSelection } from '../../shared/race-selection';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  milliSeconds = 500;

  constructor() {}

  getLevels(): Observable<number[]> {
    return of([1, 2]);
  }

  getClasses(): Observable<string[]> {
    return of(['Barbarian', 'Wizard']).pipe(delay(this.milliSeconds));
  }

  getRaces(): Observable<RaceSelection[]> {
    return of([
      new RaceSelection('Gnome', ['Forest Gnome', 'Rock Gnome']),
      new RaceSelection('Elf', ['High Elf', 'Wood Elf', 'Dark Elf']),
    ]).pipe(delay(this.milliSeconds));
  }

  getRace(race: string): Observable<Race> {
    if (race === 'Forest Gnome') {
      return of(new ForestGnome()).pipe(delay(this.milliSeconds));
    }
    if (race === 'Rock Gnome') {
      return of(new RockGnome()).pipe(delay(this.milliSeconds));
    }
    if (race === 'Dark Elf') {
      return of(new DarkElf()).pipe(delay(this.milliSeconds));
    }
    if (race === 'High Elf') {
      return of(new HighElf()).pipe(delay(this.milliSeconds));
    }
    if (race === 'Wood Elf') {
      return of(new WoodElf()).pipe(delay(this.milliSeconds));
    }

    return of({} as Race);
  }

  getClass(selectedClass: string): Observable<CharacterClass> | null {
    if (selectedClass === 'Wizard') {
      return of(new Wizard()).pipe(delay(this.milliSeconds));
    }

    return null;
  }

  getCharacterPathFeatures(characterPath: string): Observable<any> | null {
    if (characterPath === 'Evocation') {
      return of(['Evocation Savant', 'Sculpt Spells', 'Potent Cantrip']).pipe(
        delay(this.milliSeconds)
      );
    }
    if (characterPath === 'Illusion') {
      return of([
        'Illusion Savant',
        'Improved Minor Illusion',
        'Malleable Illusion',
      ]).pipe(delay(this.milliSeconds));
    }

    return of(null);
  }
}
