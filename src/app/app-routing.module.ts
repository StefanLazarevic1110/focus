import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './core/pages/actions/actions.component';
import { ItemsComponent } from './core/pages/items/items.component';
import { MeetingComponent } from './core/pages/meeting/meeting.component';
import { PulseComponent } from './core/pages/pulse/pulse.component';

const routes: Routes = [
  { path: 'pulse', component: PulseComponent },
  { path: 'meeting', component: MeetingComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'actions', component: ActionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
