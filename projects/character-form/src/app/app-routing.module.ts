import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilitiesFormComponent } from './abilities-form/abilities-form.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const routes: Routes = [
  {
    path: '1',
    component: CreateCharacterComponent,
  },
  {
    path: '2',
    component: AbilitiesFormComponent,
  },
  {
    path: '3',
    component: ClassFormComponent,
  },
  {
    path: '**',
    redirectTo: '1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static components = [
    CreateCharacterComponent,
    ClassFormComponent,
    AbilitiesFormComponent,
  ];
}
