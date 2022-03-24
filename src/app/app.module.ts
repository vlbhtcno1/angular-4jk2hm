import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,ToastrModule.forRoot(
    {
      disableTimeOut: true
    }
  ) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
