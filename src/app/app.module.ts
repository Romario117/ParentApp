import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildViewComponent } from './components/child-view/child-view.component';
import { ParentViewComponent } from './components/parent-view/parent-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildViewComponent,
    ParentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
