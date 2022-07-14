import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './@theme/layout/content/content.component';
import { HeaderComponent } from './@theme/layout/header/header.component';
import { FooterHomeComponent } from './@theme/layout/footer-home/footer-home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './@theme/layout/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'gioi-thieu', component: HomePageComponent },
  { path: 'san-pham', component: HomePageComponent },
  { path: 'hoat-dong', component: HomePageComponent },
  { path: 'thu-vien', component: HomePageComponent },
  { path: 'tuyen-dung', component: HomePageComponent },
  { path: 'tuyen-dung/:id', component: HomePageComponent },
  { path: 'lien-he', component: HomePageComponent },
  { path: 'login', pathMatch: 'full', component: HomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterHomeComponent,
    HomePageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
