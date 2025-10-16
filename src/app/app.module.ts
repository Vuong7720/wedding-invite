import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CoupleComponent } from './components/couple/couple.component';
import { WishFormComponent } from './components/wish-form/wish-form.component';
import { FormsModule } from '@angular/forms';
import { StoryComponent } from './components/story/story.component';
import { ParticleEffectComponent } from './shared/particle-effect/particle-effect.component';
import { OtherComponent } from './components/other/other.component';
import { MusicPlayerComponent } from './music-player.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { LightboxModalComponent } from './components/lightbox-modal/lightbox-modal.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    GalleryComponent,
    CoupleComponent,
    WishFormComponent,
    StoryComponent,
    ParticleEffectComponent,
    OtherComponent,
    MusicPlayerComponent,
    CountdownComponent,
    AlbumsComponent,
    LightboxModalComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 Thêm dòng này
})
export class AppModule { }
