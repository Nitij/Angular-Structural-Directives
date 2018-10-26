import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetBorderDirective } from './set-border.directive';
import { PersonComponent } from './Components/person/person.component';
import { ShowPersonDirective } from './Directives/show-person.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBorderDirective,
    PersonComponent,
    ShowPersonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
