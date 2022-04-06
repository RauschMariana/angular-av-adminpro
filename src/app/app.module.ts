import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';




@NgModule({
  declarations: [
    AppComponent,
    NotpagefoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    AuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
