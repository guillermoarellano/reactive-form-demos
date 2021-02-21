import { Component, OnInit } from '@angular/core';
import { CharacterPubSubService } from '../../core/services/character-pub-sub.service';
import { CharacterService } from '../../core/services/character.service';

@Component({
  selector: 'app-class-features',
  templateUrl: './class-features.component.html',
  styleUrls: ['./class-features.component.scss']
})
export class ClassFeaturesComponent implements OnInit {
  characterFeatures: any;

  constructor(private characterPubSub: CharacterPubSubService,
              private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterPubSub.onUpdate().subscribe((response) => {
      if (response.characterPath) {
        this.characterService.getCharacterPathFeatures(response.characterPath)?.subscribe((characterFeatures) => {
          this.characterFeatures = characterFeatures;
        });
      }
    });
  }
}
