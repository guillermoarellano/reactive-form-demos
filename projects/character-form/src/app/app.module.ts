import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassFeaturesComponent } from './class-form/class-features/class-features.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassFeaturesComponent,
    AppRoutingModule.components
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
