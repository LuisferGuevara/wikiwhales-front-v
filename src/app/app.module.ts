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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MemoryComponent } from './pages/memory/memory.component';
import { RestartDialogComponent } from './pages/memory/restart-dialog/restart-dialog.component';


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
    GameCardComponent,
    MemoryComponent,
    RestartDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
