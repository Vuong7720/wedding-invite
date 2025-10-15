// music-player.component.ts

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-music-player', // Selector mới để sử dụng trong app.component.html
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'] // Bạn có thể dùng Tailwind trực tiếp trong template, hoặc thêm CSS tùy chỉnh ở đây
})
export class MusicPlayerComponent implements AfterViewInit {
  isMusicPlaying: boolean = false;
  private audioEl: HTMLAudioElement | null = null;
  // Khai báo đường dẫn nhạc ở đây, hoặc Input() từ component cha (tùy chọn)
  musicSrc: string = 'assets/nhac1.mp3'; // <-- THAY THẾ LINK CỦA BẠN

  ngAfterViewInit(): void {
    // Lấy phần tử audio sau khi view đã được khởi tạo
    this.audioEl = document.getElementById('backgroundMusic') as HTMLAudioElement;
    
    // Thử play nhạc ngay lập tức. Nếu trình duyệt chặn, nó sẽ bị catch.
    this.tryAutoplay();
  }

  tryAutoplay(): void {
     if (this.audioEl) {
        this.audioEl.play().then(() => {
            this.isMusicPlaying = true;
        }).catch(error => {
            // Nhạc bị chặn, nút sẽ hiển thị trạng thái Tắt tiếng
            this.isMusicPlaying = false; 
        });
    }
  }

  toggleMusic(): void {
    if (!this.audioEl) return;

    if (this.isMusicPlaying) {
      this.audioEl.pause();
      this.isMusicPlaying = false;
    } else {
      // Chơi nhạc và xử lý lỗi chặn
      this.audioEl.play().then(() => {
        this.isMusicPlaying = true;
      }).catch(error => {
        console.error("Lỗi khi cố gắng bật nhạc:", error);
      });
    }
  }
}