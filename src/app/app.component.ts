import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wedding-invite';
  isAppReady: boolean = false; 
enterWebsite(): void {
    this.isAppReady = true; 
    
    // GỌI HÀM PHÁT NHẠC
    // Vì người dùng đã tương tác (click), trình duyệt sẽ cho phép phát nhạc.
    const audioEl = document.getElementById('backgroundMusic') as HTMLAudioElement;
    if (audioEl) {
        audioEl.play().catch(e => console.log("Không thể phát nhạc ngay lập tức. Cung cấp nút điều khiển."));
    }
  }
}
