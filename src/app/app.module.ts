import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './@theme/layout/content/content.component';
import { HeaderComponent } from './@theme/layout/header/header.component';
import { FooterHomeComponent } from './@theme/layout/footer-home/footer-home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './@theme/layout/menu/menu.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'game', component: HomePageComponent },
  { path: 'team', component: HomePageComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: 'contact', component: HomePageComponent },
  { path: 'login', pathMatch: 'full', component: HomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterHomeComponent,
    HomePageComponent,
    MenuComponent,
    GamePageComponent,
    JobsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
