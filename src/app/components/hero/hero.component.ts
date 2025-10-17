import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
heroImageUrl: string = 'assets/image_weding/wd_ud1.jpg';
  
  // Tạo style string để binding
  get heroBackgroundStyle(): string {
    return `url('${this.heroImageUrl}')`;
  }
}
