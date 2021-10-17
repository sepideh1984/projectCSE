import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './drop-down.directive';
import { ToggelComponent } from './toggel/toggel.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.model';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { HeaderEnComponent } from './header-en/header-en.component';
import { ToogelEnComponent } from './toogel-en/toogel-en.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   DropDownDirective,
   ToggelComponent,
   HomeComponent,
   UserComponent,
   SecondHeaderComponent,
   HomeEnComponent,
   HeaderEnComponent,
   ToogelEnComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }