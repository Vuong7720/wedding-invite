import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wedding-invite';
  isAppReady: boolean = false;
  splashScreenOpacity: number = 1;
  enterWebsite(): void {
    this.isAppReady = true;

    // GỌI HÀM PHÁT NHẠC
    // Vì người dùng đã tương tác (click), trình duyệt sẽ cho phép phát nhạc.
    const audioEl = document.getElementById('backgroundMusic') as HTMLAudioElement;
    if (audioEl) {
      audioEl.play().catch(e => console.log("Không thể phát nhạc ngay lập tức. Cung cấp nút điều khiển."));
    }

    // 2. TẠO HIỆU ỨNG MỜ DẦN
    // Thay đổi Opacity về 0 (độ mờ)
    this.splashScreenOpacity = 0;

    // 3. ĐỢI HIỆU ỨNG KẾT THÚC (ví dụ: 500ms) rồi ẩn hoàn toàn Component
    // Thời gian trong setTimeout phải bằng hoặc lớn hơn thời gian transition trong Tailwind CSS (0.5s)
    setTimeout(() => {
      this.isAppReady = true;
    }, 1000); // 500ms = 0.5 giây
  }
}
