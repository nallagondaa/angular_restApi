import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MembersComponent } from '../app/members/members.component';
import { TeamService } from '../app/team.service';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
