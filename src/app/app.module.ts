import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AffectedComponent } from './affected/affected.component';
import { AffectedFormComponent } from './affected/affected-form/affected-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CountersPipe } from './counters.pipe';
import { RecoveredComponent } from './recovered/recovered.component';
import { TableViewComponent } from './utils/table-view/table-view.component';
import { RecoveredFormComponent } from './recovered/recovered-form/recovered-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TheadComponent } from './utils/thead/thead.component';
import { ModalComponent } from './utils/modal/modal.component';
import { FilterNamePipe } from './filter-name.pipe';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    AffectedComponent,
    AffectedFormComponent,
    NavComponent,
    CountersPipe,
    RecoveredComponent,
    TableViewComponent,
    RecoveredFormComponent,
    TheadComponent,
    ModalComponent,
    FilterNamePipe,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
