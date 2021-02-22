import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterPubSubService {
  protected savedCharacterForm: BehaviorSubject<any>;

  constructor() {
    this.savedCharacterForm = new BehaviorSubject<any>(null);
  }

  update(object?: any): void {
    this.savedCharacterForm.next(object);
  }

  onUpdate(): Observable<any> {
    return this.savedCharacterForm.asObservable();
  }

  getValue(): any {
    return this.savedCharacterForm.getValue();
  }
}
