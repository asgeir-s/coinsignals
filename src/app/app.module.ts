import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PositionListComponent } from './components/position-list/position-list.component';
import { MdInputModule } from '@angular/material';
import { StreamListComponent } from './components/stream-list/stream-list.component';
import { OpenPositionComponent } from './components/open-position/open-position.component';
import { StreamsViewComponent } from './components-top/streams-view/streams-view.component';
import { SingleStreamViewComponent } from './components-top/single-stream-view/single-stream-view.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PositionListComponent,
    StreamListComponent,
    OpenPositionComponent,
    StreamsViewComponent,
    SingleStreamViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
