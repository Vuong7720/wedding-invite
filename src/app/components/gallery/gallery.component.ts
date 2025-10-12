import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle'; // <-- Dòng này quan trọng!

// Đăng ký Swiper Web Components
register(); 

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

}
