import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StreamsViewComponent } from './components-top/streams-view/streams-view.component';
import { SingleStreamViewComponent } from './components-top/single-stream-view/single-stream-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/streams', pathMatch: 'full' },
  { path: 'streams', component: StreamsViewComponent },
  { path: 'stream/:address', component: SingleStreamViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
