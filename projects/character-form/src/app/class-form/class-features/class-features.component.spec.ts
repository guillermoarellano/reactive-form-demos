import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CharacterPubSubService } from '../../core/services/character-pub-sub.service';
import { CharacterService } from '../../core/services/character.service';

import { ClassFeaturesComponent } from './class-features.component';

describe('ClassFeaturesComponent', () => {
  let component: ClassFeaturesComponent;
  let fixture: ComponentFixture<ClassFeaturesComponent>;
  const characterPubSubStub: any = {
    onUpdate: (): any => {
      const character = new BehaviorSubject<any>({characterPath: 'Evocation'});
      return character.asObservable();
    }
  };
  const characterServiceStub: any = {
    getCharacterPathFeatures: (): any => {
      return of(['']);
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassFeaturesComponent ],
      providers: [{provide: CharacterService, useValue: characterServiceStub},
                  {provide: CharacterPubSubService, useValue: characterPubSubStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
