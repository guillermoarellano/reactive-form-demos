import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CharacterPubSubService } from '../core/services/character-pub-sub.service';
import { CharacterService } from '../core/services/character.service';
import { Wizard } from '../shared/backend/wizard';

import { ClassFormComponent } from './class-form.component';

@Component({ selector: 'app-class-features', template: '' })
// tslint:disable-next-line: component-class-suffix
class ClassFeaturesStub {}

describe('ClassFormComponent', () => {
  let component: ClassFormComponent;
  let fixture: ComponentFixture<ClassFormComponent>;
  const characterPubSubStub: any = {
    getValue: (): any => {
      return { characterClass: 'Wizard' };
    },
    update: (): void => {},
  };
  const characterServiceStub: any = {
    getClass: (): any => {
      return of(new Wizard());
    },
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ClassFormComponent, ClassFeaturesStub],
        imports: [ReactiveFormsModule, RouterTestingModule],
        providers: [
          { provide: CharacterService, useValue: characterServiceStub },
          { provide: CharacterPubSubService, useValue: characterPubSubStub },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
