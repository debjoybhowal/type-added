import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AffectedComponent } from './affected/affected.component';
import { AffectedFormComponent } from './affected/affected-form/affected-form.component';
import { AffectedViewComponent } from './affected/affected-view/affected-view.component';
import { TableHeadComponent } from './affected/affected-view/table-head/table-head.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CountersPipe } from './counters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AffectedComponent,
    AffectedFormComponent,
    AffectedViewComponent,
    TableHeadComponent,
    NavComponent,
    CountersPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
