import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { UsersModule } from './users/users.module';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, HeaderComponent, FooterComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, FormsModule, NgbModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatDividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
