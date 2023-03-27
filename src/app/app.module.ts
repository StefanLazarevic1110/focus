import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActionsComponent } from './core/pages/actions/actions.component';
import { ItemsComponent } from './core/pages/items/items.component';
import { PulseComponent } from './core/pages/pulse/pulse.component';
import { PagesComponent } from './core/pages/pages.component';
import { MeetingComponent } from './core/pages/meeting/meeting.component';
import { ComponentsComponent } from './core/components/components.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { TableComponent } from './core/components/table/table.component';
import { DelaybadgeComponent } from './core/components/delaybadge/delaybadge.component';
import { StatusbadgeComponent } from './core/components/statusbadge/statusbadge.component';
import { LeftNavBarComponent } from './core/components/left-nav-bar/left-nav-bar.component';
import { QuickitemformComponent } from './core/components/quickitemform/quickitemform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionsBtnComponent } from './core/components/actions-btn/actions-btn.component';
import { ProgressbarComponent } from './core/components/progressbar/progressbar.component';
import { InitiatedComponent } from './core/components/initiated/initiated.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    ItemsComponent,
    PulseComponent,
    PagesComponent,
    MeetingComponent,
    ComponentsComponent,
    NavBarComponent,
    TableComponent,
    DelaybadgeComponent,
    StatusbadgeComponent,
    LeftNavBarComponent,
    QuickitemformComponent,
    ActionsBtnComponent,
    ProgressbarComponent,
    InitiatedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
