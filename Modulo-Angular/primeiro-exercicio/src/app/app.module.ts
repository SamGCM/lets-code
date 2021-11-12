import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { FormComponent } from './form/form.component';
import { HobbyModule } from './hobby/hobby.module';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HobbyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
