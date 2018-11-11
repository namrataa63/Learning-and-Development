import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ViewGoalComponent } from './view-goal/view-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ViewGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
