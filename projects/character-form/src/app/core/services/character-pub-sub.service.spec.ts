import { TestBed } from '@angular/core/testing';

import { CharacterPubSubService } from './character-pub-sub.service';

describe('CharacterPubSubService', () => {
  let service: CharacterPubSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterPubSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
