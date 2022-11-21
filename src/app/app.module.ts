import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateWhaleComponent } from './pages/update-whale/update-whale.component';
import { NewWhaleComponent } from './pages/new-whale/new-whale.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhaleDetailComponent } from './pages/whales/whale-detail/whale-detail.component';
import { WhalesComponent } from './pages/whales/whales.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WhalesComponent,
    WhaleDetailComponent,
    NavbarComponent,
    NewWhaleComponent,
    UpdateWhaleComponent,
    FooterComponent,
    CardComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
