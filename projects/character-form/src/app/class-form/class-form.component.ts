import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterPubSubService } from '../core/services/character-pub-sub.service';
import { CharacterService } from '../core/services/character.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {
  savedCharacterForm: any;
  classForm!: FormGroup;
  characterPaths: any;

  constructor(private characterPubSub: CharacterPubSubService,
              private characterService: CharacterService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.savedCharacterForm = this.characterPubSub.getValue();
    this.characterService.getClass(this.savedCharacterForm.characterClass)?.subscribe((characterClass: any) => {
      this.characterPaths = characterClass.arcaneTraditions;
      this.createClassForm();
      this.onChanges();
    });
  }

  private createClassForm(): void {
    this.classForm = this.fb.group({
      characterPath: [this.characterPaths[0]]
    });
    this.savedCharacterForm.characterPath = this.characterPaths[0];
    this.characterPubSub.update(this.savedCharacterForm);
  }

  get characterPath(): any {
    return this.classForm.get('characterPath');
  }

  private onChanges(): void {
    this.characterPath
      .valueChanges
      .subscribe((change: any) => {
        this.savedCharacterForm.characterPath = change;
        this.characterPubSub.update(this.savedCharacterForm);
      });
  }

  goToPageTwo(): void {
    this.router.navigate(['2']);
  }
}
