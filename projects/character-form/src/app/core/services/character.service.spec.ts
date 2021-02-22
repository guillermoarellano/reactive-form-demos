import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';

describe('CharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterService]
    });
  });

  // it('should be created', inject([CharacterService], (service: CharacterService) => {
  //   expect(service).toBeTruthy();
  // }));
  //
  // it('should get character levels', inject([CharacterService], (service: CharacterService) => {
  //     spyOn(service, "getLevels").and.returnValue(Observable.of([1, 2]));
  //     expect(service.getLevels()).toEqual(Observable.of([1, 2]));
  // }));
  //
  // it('should get character classes', inject([CharacterService], (service: CharacterService) => {
  //   service.getClasses().subscribe((classes) => {
  //     expect(classes).toEqual(["Barbarian", "Wizard"]);
  //   })
  // }));
  //
  // it('should get character races', inject([CharacterService], (service: CharacterService) => {
  //   service.getRaces().subscribe((races) => {
  //     expect(races).toEqual([
  //       new RaceSelection("Gnome", ["Forest Gnome", "Rock Gnome"]),
  //       new RaceSelection("Elf", ["High Elf", "Wood Elf", "Dark Elf"])
  //     ]);
  //   });
  // }));
  //
  // it('should get forest gnome', inject([CharacterService], (service: CharacterService) => {
  //   service.getRace("Forest Gnome").subscribe((characterRace) => {
  //     expect(characterRace).toEqual(new RockGnome());
  //   })
  // }));
});
