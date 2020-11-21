import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindetailsComponentComponent } from './admindetails-component/admindetails-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DcodeDialogComponent } from './reusable-component/dcode-dialog/dcode-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataProviderService } from './services/data-provider.service';
import { DialogService } from './services/dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    AdmindetailsComponentComponent,
    DcodeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [DialogService, DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
