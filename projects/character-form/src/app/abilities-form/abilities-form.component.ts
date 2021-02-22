import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { CharacterPubSubService } from '../core/services/character-pub-sub.service';
import { CharacterService } from '../core/services/character.service';
import { Ability } from '../shared/ability';
import { Race } from '../shared/race';

@Component({
  selector: 'app-abilities-form',
  templateUrl: './abilities-form.component.html',
  styleUrls: ['./abilities-form.component.scss'],
})
export class AbilitiesFormComponent implements OnInit {
  characterRace!: Race;
  savedCharacterForm: any;
  abilitiesForm!: FormGroup;

  constructor(
    private characterService: CharacterService,
    private characterPubSub: CharacterPubSubService,
    private router: Router,
    private fb: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.setRace();
  }

  setRace(): void {
    this.savedCharacterForm = this.characterPubSub.getValue();
    this.characterService
      .getRace(this.savedCharacterForm.characterRace)
      .subscribe((race: Race) => {
        this.characterRace = race;
        this.createAbilitiesForm();
        this.autoSave();
      });
  }

  createAbilitiesForm(): void {
    let abilitiesArray: FormArray = this.savedCharacterForm.abilities;

    if (abilitiesArray.length === 0) {
      abilitiesArray = this.fb.array([
        this.fb.group(new Ability('Strength', this.characterRace.strength)),
        this.fb.group(new Ability('Dexterity', this.characterRace.dexterity)),
        this.fb.group(
          new Ability('Constitution', this.characterRace.constitution)
        ),
        this.fb.group(
          new Ability('Intelligence', this.characterRace.intelligence)
        ),
        this.fb.group(new Ability('Wisdom', this.characterRace.wisdom)),
        this.fb.group(new Ability('Charisma', this.characterRace.charisma)),
      ]);
    }

    this.abilitiesForm = this.fb.group({
      abilities: abilitiesArray,
    });
  }

  get abilities(): FormArray {
    return this.abilitiesForm.get('abilities') as FormArray;
  }

  autoSave(): void {
    this.abilities.controls.forEach((ability) => {
      ability.valueChanges.pipe(debounceTime(500)).subscribe(() => {
        this.savedCharacterForm.abilities = this.abilities;
        this.characterPubSub.update(this.savedCharacterForm);
      });
    });
  }

  goToPageThree(): void {
    this.router.navigate(['3']);
  }

  goToPageOne(): void {
    this.router.navigate(['']);
  }
}
